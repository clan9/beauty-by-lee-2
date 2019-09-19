DEVELOPMENT

In terminal run 3 things:

live-server public
npm run babel
npm run watch:sass

** changed to use npm-run-all script - so now just one command :

npm start



BUILD

npm run build



After all done - might want to create another public type folder with only the code needed for hosting (so sass files aren't there - also get rid of the intermediate css files from build process).