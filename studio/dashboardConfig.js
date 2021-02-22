export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6033cec3e6b2da40b81c7412',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-tove-studio',
                  apiId: '56d61ec6-8d70-4e71-a431-d72f74e39ba6'
                },
                {
                  buildHookId: '6033cec399334c4929495e34',
                  title: 'Blog Website',
                  name: 'sanity-sapper-tove',
                  apiId: 'd234bbbd-9421-4273-a4c7-3c706ccd3bf1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sportyfred/sanity-sapper-Tove',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-tove.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
