export default {
  widgets: [
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
                  buildHookId: '5f3e284d2c094306c5ea309c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-i8fuaq72',
                  apiId: '76ff447a-657d-4fc2-b94c-a553fe1d4c27'
                },
                {
                  buildHookId: '5f3e284e50da3aa86c145352',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-p3tjgqw4',
                  apiId: '29d4b9c6-5cdc-4dad-8572-c2e29cf3e22a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/solimer/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-p3tjgqw4.netlify.app', category: 'apps'}
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
