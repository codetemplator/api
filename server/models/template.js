'use strict';

module.exports = Template => {

  Template.observe('before save', (ctx, next) => {
    if (ctx.isNewInstance) {
      const directory = Template.app.models.directory;

      directory.create({name: 'root'}, (err, dir) => {
        ctx.instance.directoryId = dir.id;
        next(err);
      });
    }
  });
};
