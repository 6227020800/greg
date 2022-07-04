#!/bin/sh 

rm -rf ./dist
mkdir ./dist
mkdir ./dist/assets


rm -rf ./build
mkdir ./build




npm run  build --no-source-maps --no-optimize  ./ application/index.html 

cp -r ./application/assets/icons ./dist/assets/icons
cp -r ./application/assets/image ./dist/assets/image

cp ./application/manifest.webapp ./dist/
cp ./application/ads.html ./dist/

#!/bin/bash
#create default app zip
cd dist/
rm ../build/greg.zip
zip -r ../build/greg.zip ./*


#create bHaCkers zip
rm ../build/greg-omnisd.zip
zip -r ../build/application.zip ./*
cd ../build/
mkdir -p greg-omnisd
touch ./greg-omnisd/metadata.json
echo '{ "version": 1, "manifestURL": "app://greg/manifest.webapp" }'  > ./greg-omnisd/metadata.json

cp application.zip greg-omnisd/
cd greg-omnisd/
zip -r ../greg-omnisd.zip ./*
rm -fr ../greg-omnisd
rm ../application.zip


#github page
cd ../..
rm -fr ./docs
mkdir docs
cp -r ./dist/* ./docs/
exit





