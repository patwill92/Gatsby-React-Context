const axios = require("axios");
const crypto = require("crypto");

exports.onCreateNode = async ({ actions, createNodeId }) => {
  const { createNode } = actions;

  const processNode = data => {
    const nodeId = createNodeId(`my-node`);
    const nodeContent = JSON.stringify(data);
    const nodeContentDigest = crypto
      .createHash("md5")
      .update(nodeContent)
      .digest("hex");

    return {
      ...data,
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `MyApi`,
        content: nodeContent,
        contentDigest: nodeContentDigest
      }
    };
  };

  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  return createNode(processNode(data));
};

exports.onCreateWebpackConfig = ({
  actions,
  stage,
  rules,
  loaders,
  plugins
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                modules: true,
                localIdentName: "[name]-[local]___[hash:base64:5]"
              }
            },
            {
              loader: "sass-loader"
            }
          ]
        }
      ]
    }
  });
};
