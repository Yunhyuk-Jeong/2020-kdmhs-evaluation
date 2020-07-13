const GpuModel = require("../../models/gpu");
const mongoose = require("mongoose");

const list = (req, res) => {
  let limit = req.query.limit || 10;
  limit = parseInt(limit, 10);

  if (Number.isNaN(limit)) {
    return res.status(400).end();
  }

  GpuModel.find((err, result) => {
    if (err) return res.status(500).end();
    res.render("gpu/list", { result });
  })
    .limit(limit)
    .sort({ _id: -1 });
};

const detail = (req, res) => {
  const id = req.params.id;

  GpuModel.findById(id, (err, result) => {
    if (err) return res.status(500).end();
    if (!result) return res.status(404).end();
    res.render("gpu/detail", { result });
  });
};

const create = (req, res) => {
  const { name, manufacturer, releaseDate } = req.body;
  if (!name || !manufacturer || !releaseDate) return res.status(400).end();

  GpuModel.create({ name, manufacturer, releaseDate }, (err, result) => {
    if (err) return res.status(500).end();
    res.status(201).json(result);
  });
};

const update = (req, res) => {
  const id = req.params.id;
  const { name, manufacturer, releaseDate } = req.body;

  GpuModel.findByIdAndUpdate(id, { name, manufacturer, releaseDate }, { new: true }, (err, result) => {
    if (err) return res.status(500).send("수정 시 오류가 발생했습니다.");
    if (!result) return res.status(404).send("해당하는 정보가 없습니다.");
    res.json(result);
  });
};

const remove = (req, res) => {
  const id = req.params.id;
  const { name, manufacturer, releaseDate } = req.body;

  GpuModel.findByIdAndDelete(id, (err, result) => {
    if (err) return res.status(500).send("삭제 시 오류가 발생했습니다.");
    if (!result) return res.status(404).send("해당하는 정보가 없습니다.");
    res.json(result);
  });
};

const checkID = (req, res, next) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).end();
  }
  next();
};

const showCreatePage = (req, res) => {
  res.render("gpu/create");
};

const showUpdatePage = (req, res) => {
  const id = req.params.id;

  GpuModel.findById(id, (err, result) => {
    if (err) return res.status(500).send("조회시 오류가 발생했습니다.");
    if (!result) return res.status(404).send("해당하는 정보가 없습니다.");
    res.render("gpu/update", { result });
  });
};

module.exports = {
  list,
  detail,
  create,
  update,
  remove,
  checkID,
  showCreatePage,
  showUpdatePage,
};
