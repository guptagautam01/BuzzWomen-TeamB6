"use strict";
const functions = require("firebase-functions");
const {WebhookClient, Payload} = require("dialogflow-fulfillment");
const admin = require("firebase-admin");
const {quickStart} = require("./Translate");
const {firebaseConfig} = require("./Config");
admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig),
  databaseURL: "https://chatbot-psab-default-rtdb.firebaseio.com",
});

const db = admin.firestore();
process.env.DEBUG = "dialogflow:debug";
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(
    (request, response) => {
      const agent = new WebhookClient({request, response});
      const sessionId = request.body.session.split("/").reverse()[0];
      async function saveInDb(field, data) {
        const info = {};
        info[field] = data;
        await db.collection("UserData").doc(sessionId).set({info}, {merge: true});
      }
      function convertToString(arr) {
        let str = "";
        arr.forEach((element) => {
          str = str.concat(`\n ${element}`);
        });
        return str;
      }
      async function getName(agent) {
        const name = agent.parameters.name;
        await saveInDb("name", name);
        const payload = {
          richContent: [
            [
              {
                type: "chips",
                options: [
                  {
                    text:
                    agent.locale === "en" ?
                      "new" :
                      agent.locale === "hi" ?
                      "नया" :
                      "ಹೊಸ",
                  },
                  {
                    text:
                    agent.locale === "en" ?
                      "existing" :
                      agent.locale === "hi" ?
                      "मौजूदा" :
                      "ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ",
                  },
                ],
              },
            ],
          ],
        };
        const telegramPayload = {
          telegram: {
            text: "Choose from below",
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "new",
                    callback_data: "new",
                  },
                ],
                [
                  {
                    text: "existing",
                    callback_data: "existing",
                  },
                ],
              ],
            },
          },
        };
        const text =
        "Would you like to explore new opportunities or assess existing opportunity? ";
        if (agent.locale === "en") {
          agent.add(text);
        } else {
          const res = await quickStart(text, agent.locale);
          agent.add(res);
        }
        agent.add(
            new Payload(agent.UNSPECIFIED, payload, {
              rawPayload: true,
              sendAsMessage: true,
            }),
        );
        agent.add(
            new Payload(agent.TELEGRAM, telegramPayload, {
              rawPayload: true,
              sendAsMessage: true,
            }),
        );
      }
      async function getAge(agent) {
        const age = agent.parameters.age.amount;
        await saveInDb("age", age);
        const text =
        "For how long can you work in a day(approximately in hours)? ";
        if (agent.locale === "en") {
          agent.add(text);
        } else {
          const res = await quickStart(text, agent.locale);
          agent.add(res);
        }
      }
      async function getInvestment(agent) {
        const investment = agent.parameters.investment;
        await saveInDb("investment", investment);
        const text =
        "What are your skills? Is there anything you are interested in? ";
        const payload = {
          richContent: [
            [
              {
                type: "chips",
                options: [
                  {
                    text:
                    agent.locale === "en" ?
                      "stitching" :
                      agent.locale === "hi" ?
                      "सिलाई" :
                      "ಹೊಲಿಗೆ",
                  },
                  {
                    text:
                    agent.locale === "en" ?
                      "cooking" :
                      agent.locale === "hi" ?
                      "खाना बनाना" :
                      "ಅಡುಗೆ",
                  },
                  {
                    text:
                    agent.locale === "en" ?
                      "makeup" :
                      agent.locale === "hi" ?
                      "शृंगार" :
                      "ಸೌಂದರ್ಯ ವರ್ಧಕ",
                  },
                  {
                    text:
                    agent.locale === "en" ?
                      "marketing" :
                      agent.locale === "hi" ?
                      "विपणन" :
                      "ಮಾರ್ಕೆಟಿಂಗ್",
                  },
                ],
              },
            ],
          ],
        };
        const telegramPayload = {
          telegram: {
            text: "Choose from below",
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "stitching",
                    callback_data: "stitching",
                  },
                ],
                [
                  {
                    text: "cooking",
                    callback_data: "cooking",
                  },
                ],
                [
                  {
                    text: "makeup",
                    callback_data: "makeup",
                  },
                ],
                [
                  {
                    text: "marketing",
                    callback_data: "marketing",
                  },
                ],
              ],
            },
          },
        };
        if (agent.locale === "en") {
          agent.add(text);
        } else {
          const res = await quickStart(text, agent.locale);
          agent.add(res);
        }
        agent.add(
            new Payload(agent.UNSPECIFIED, payload, {
              rawPayload: true,
              sendAsMessage: true,
            }),
        );
        agent.add(
            new Payload(agent.TELEGRAM, telegramPayload, {
              rawPayload: true,
              sendAsMessage: true,
            }),
        );
      }
      async function getHours(agent) {
        const time = agent.parameters.hours;
        await saveInDb("time", time);
        const text = "How much money would you be able to invest?";
        if (agent.locale === "en") {
          agent.add(text);
        } else {
          const res = await quickStart(text, agent.locale);
          agent.add(res);
        }
      }
      async function getRevenue(agent) {
        const revenue = agent.parameters.revenue;
        await saveInDb("revenue", revenue);
        const text = "What is your total family income? ";
        if (agent.locale === "en") {
          agent.add(text);
        } else {
          const res = await quickStart(text, agent.locale);
          agent.add(res);
        }
      }
      async function getSkill(agent) {
        const skill = agent.parameters.skill;
        await saveInDb("skill", skill);
        const text = `Have you ever tried ${skill} ?`;
        const payload = {
          richContent: [
            [
              {
                type: "chips",
                options: [
                  {
                    text:
                    agent.locale === "en" ?
                      "yes" :
                      agent.locale === "hi" ?
                      "हां" :
                      "ಹೌದು",
                  },
                  {
                    text:
                    agent.locale === "en" ?
                      "no" :
                      agent.locale === "hi" ?
                      "नहीं" :
                      "ಇಲ್ಲ",
                  },
                ],
              },
            ],
          ],
        };
        const telegramPayload = {
          telegram: {
            text: "Choose from below",
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "yes",
                    callback_data: "yes",
                  },
                ],
                [
                  {
                    text: "no",
                    callback_data: "no",
                  },
                ],
              ],
            },
          },
        };

        if (agent.locale === "en") {
          agent.add(text);
        } else {
          const res = await quickStart(text, agent.locale);
          agent.add(res);
        }
        agent.add(
            new Payload(agent.UNSPECIFIED, payload, {
              rawPayload: true,
              sendAsMessage: true,
            }),
        );
        agent.add(
            new Payload(agent.TELEGRAM, telegramPayload, {
              rawPayload: true,
              sendAsMessage: true,
            }),
        );
      }
      async function getDoc(skill) {
        const res = await db
            .collection("ProfessionData")
            .where("skill", "==", skill)
            .get();
        let ans;
        res.forEach((doc) => {
          ans = doc.data();
        });
        return ans;
      }
      async function func(agent) {
        const res = await db.collection("UserData").doc(sessionId).get();
        const {investment, revenue, skill, time} = res.data().info;
        const doc=await getDoc(skill);
        let score = 0;
        score += investment >= doc.investment ? 2 : 0;
        score += revenue <= doc.expected_income ? 1 : 0;
        score += time >= doc.working_hours ? 2 : 0;
        if (score / 5 >= 0.5) {
          const text=`We have the following suggestion for you : ${doc.profession}.`;
          if (agent.locale==="en") {
            agent.add(text);
          } else {
            const res = await quickStart(text, agent.locale);
            agent.add(res);
          }
        } else {
          const text="It is not advisable for you to venture in this profession at this moment. Please gain some more experience.";
          if (agent.locale==="en") {
            agent.add(text);
          } else {
            const res = await quickStart(text, agent.locale);
            agent.add(res);
          }
        }
      }
      function helper(ratio) {
        let str;
        if (ratio >= 0.7) {
          str = "high";
        } else if (ratio < 0.7 && ratio >= 0.4) {
          str = "moderate";
        } else {
          str = "low";
        }
        return str;
      }
      async function tailorFunc(agent) {
        const doc = await getDoc("stitching");
        const {experience, course, time, profit, investment} = agent.parameters;
        let points = 0;
        const areasToImprove = [];
        if (doc.experience <= experience) {
          points++;
        } else {
          areasToImprove.push("Gain more experience");
        }
        if (doc.working_hours <= time) {
          points++;
        } else {
          areasToImprove.push("Increase working Hours");
        }

        if (course == "Yes") {
          points++;
        } else {
          areasToImprove.push("Try some course to gain knowledge");
        }

        if (doc.expected_income >= profit) {
          points += 2;
        } else {
          areasToImprove.push("Decrease expected income");
        }

        if (doc.investment <= investment) {
          points += 2;
        } else {
          areasToImprove.push("Increase Investment");
        }
        const str = helper(points / 7);

        agent.add(`Your probability of success is ${str}`);
        if (areasToImprove.length > 0) {
          agent.add(
              `Your areas of improvement are :  ${convertToString(areasToImprove)}`,
          );
        }
      }
      async function kiranaFunc(agent) {
        const doc = await getDoc("marketing");
        let points = 0;
        const areasToImprove = [];
        const {experience, profit, investment, market, location} =
        agent.parameters;

        if (experience == "Yes") {
          points++;
        } else {
          areasToImprove.push("Gain more experienece");
        }

        if (location == "Yes") {
          points++;
        } else {
          areasToImprove.push(" Choose a better location");
        }

        if (doc.expected_income >= profit) {
          points++;
          points++;
        } else {
          areasToImprove.push("Decrease expected income");
        }

        if (doc.investment <= investment) {
          points++;
          points++;
        } else {
          areasToImprove.push("Increase Investment");
        }

        if (market <= 6) {
          points++;
        } else {
          areasToImprove.push("Try to attract more customers");
        }
        const str = helper(points / 7);

        agent.add(`Your probability of success is ${str}`);
        if (areasToImprove.length > 0) {
          agent.add(
              `Your areas of improvement are :  ${convertToString(areasToImprove)}`,
          );
        }
      }
      async function beautyParlourFunc(agent) {
        const doc = await getDoc("makeup");
        let points = 0;
        const {time, helpOrNoHelp, experience, profit, investment, market} =
        agent.parameters;
        const areasToImprove = [];

        if (experience) {
          points++;
        } else {
          areasToImprove.push("Gain more experience");
        }

        if (doc.working_hours <= time) {
          points++;
        } else {
          areasToImprove.push("Increase working hours");
        }

        if (helpOrNoHelp == "Yes") {
          points++;
        } else {
          areasToImprove.push("You should acquire more manpower to help you");
        }

        if (market == "Yes") {
          points++;
        } else {
          areasToImprove.push("Try to attract more customers ");
        }

        if (doc.expected_income >= profit) {
          points++;
          points++;
        } else {
          areasToImprove.push("Decrease expected income");
        }

        if (doc.investment <= investment) {
          points++;
          points++;
        } else {
          areasToImprove.push("Increase investment");
        }

        const str = helper(points / 8);

        agent.add(`Your probability of success is ${str}`);
        if (areasToImprove.length > 0) {
          agent.add(
              `Your areas of improvement are :  ${convertToString(areasToImprove)}`,
          );
        }
      }
      async function dhabaFunc(agent) {
        const doc = await getDoc("cooking");
        let points = 0;
        const {noOfDishes, time, yesOrNo, profit, investment, market} =
        agent.parameters;

        const areasToImprove = [];

        if (doc.working_hours <= time) {
          points++;
        } else {
          areasToImprove.push("Increase your working hours");
        }

        if (yesOrNo == "No") {
          points++;
        } else {
          areasToImprove.push("Your should acquire more manpower to help you");
        }

        if (market == "Yes") {
          points++;
        } else {
          areasToImprove.push("Try to attract nore customers ");
        }

        if (doc.expected_income >= profit) {
          points++;
          points++;
        } else {
          areasToImprove.push("Decrease expected income");
        }

        if (doc.investment <= investment) {
          points++;
          points++;
        } else {
          areasToImprove.push("Increase investment");
        }

        if (4 <= noOfDishes) {
          points++;
        } else {
          areasToImprove.push("Increase number of dishes");
        }
        const str = helper(points / 8);

        agent.add(`Your probability of success is ${str}`);
        if (areasToImprove.length > 0) {
          agent.add(
              `Your areas of improvement are :  ${convertToString(areasToImprove)}`,
          );
        }
      }

      const intentMap = new Map();
      intentMap.set("Get Name", getName);
      intentMap.set("Age", getAge);
      intentMap.set("Investment", getInvestment);
      intentMap.set("Hours", getHours);
      intentMap.set("Revenue", getRevenue);
      intentMap.set("Skill", getSkill);
      intentMap.set("Family_Size", func);
      intentMap.set("Stitching", tailorFunc);
      intentMap.set("Kiraana Store", kiranaFunc);
      intentMap.set("Beauty Parlour", beautyParlourFunc);
      intentMap.set("Dhaaba", dhabaFunc);
      agent.handleRequest(intentMap);
    },
);
