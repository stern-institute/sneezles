#!/usr/bin/env bash

npm run build

gsutil -m cp -Z -r dist/* gs://www.sneezl.es
gsutil web set -m index.html gs://www.sneezl.es
gsutil setmeta -h "Content-Type:text/html" -h "Cache-Control: public, max-age=300" 'gs://www.sneezl.es/*.html'
