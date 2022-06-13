const {Translate} = require("@google-cloud/translate").v2;
const {config}=require("./Config");
const translate = new Translate({credentials: config,
  projectId: config.project_id});

async function quickStart(text, target) {
  const [translation] = await translate.translate(text, target);
  return translation;
}
module.exports={quickStart};
