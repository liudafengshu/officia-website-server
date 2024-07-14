const express = require("express");
const router = express.Router();
const viewController = require("../controller/viewController");

router
  // .get("/:username/news", (req, res) => {
  //   res.render("news.ejs", { title: 1 });
  // })
  .get("/", async (req, res) => {
    const cases = await viewController.indexCase();
    const data = await viewController.content();
    res.render("index.ejs", { ...data, caselist: cases });
  })
  .get("/cases", async (req, res) => {
    const common = await viewController.content(req.params.username);
    const data = await viewController.casesList(req.query);
    res.render("cases.ejs", { ...data, ...common });
  })
  .get("/:username/cases", async (req, res) => {
    const common = await viewController.content(req.params.username);
    const data = await viewController.casesList(req.query);
    res.render("cases.ejs", { ...data, ...common });
  })
  .get("/case-detail/:id", async (req, res) => {
    console.log(req.params);
    const common = await viewController.content(req.params.username);
    const { data, nextCase } = await viewController.caseDetail(req.params);
    res.render("case-detail.ejs", { data, next: nextCase, ...common });
  })
  .get("/:username/case-detail/:id", async (req, res) => {
    console.log(req.params);
    const common = await viewController.content(req.params.username);
    const { data, nextCase } = await viewController.caseDetail(req.params);
    res.render("case-detail.ejs", { data, next: nextCase, ...common });
  })
  .get("/service", async (req, res) => {
    const data = await viewController.content(req.params.username);
    res.render("service.ejs", data);
  })
  .get("/:username/service", async (req, res) => {
    const data = await viewController.content(req.params.username);
    res.render("service.ejs", data);
  })
  .get("/contact", async (req, res) => {
    const data = await viewController.content(req.params.username);
    res.render("contact.ejs", data);
  })
  .get("/:username/contact", async (req, res) => {
    const data = await viewController.content(req.params.username);
    res.render("contact.ejs", data);
  })
  .get("/about", async (req, res) => {
    const data = await viewController.content(req.params.username);
    res.render("about.ejs", data);
  })
  .get("/:username/about", async (req, res) => {
    const data = await viewController.content(req.params.username);
    res.render("about.ejs", data);
  })
  .get("/:username", async (req, res) => {
    const cases = await viewController.indexCase();
    const data = await viewController.content(req.params.username);
    console.log(data);
    res.render("index.ejs", { ...data, caselist: cases });
  });

module.exports = router;
