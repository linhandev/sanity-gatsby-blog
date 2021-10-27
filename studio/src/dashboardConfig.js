export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6178b2b3e1a104413c4ec505",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-mipdi8kj",
                  apiId: "6234334d-06ba-42f2-bf2b-7003c0bae7e0",
                },
                {
                  buildHookId: "6178b2b3074faf37911ebac4",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-qikeyprq",
                  apiId: "1465ea59-a84a-46db-898d-90c4972885bd",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/linhandev/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-qikeyprq.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
