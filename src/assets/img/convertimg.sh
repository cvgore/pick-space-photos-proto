#!/bin/bash

convert -strip -colorspace RGB -resize 75% -gaussian-blur 0.03 -quality 45% -sampling-factor 4:2:0 bg_slide1.jpg bg_slide1.webp
convert -strip -colorspace RGB -resize 75% -gaussian-blur 0.03 -quality 45% -sampling-factor 4:2:0 bg_slide2.jpg bg_slide2.webp
convert -strip -colorspace RGB -resize 75% -gaussian-blur 0.03 -quality 45% -sampling-factor 4:2:0 bg_slide3.jpg bg_slide3.webp
convert -strip -colorspace RGB -resize 75% -gaussian-blur 0.03 -quality 45% -sampling-factor 4:2:0 bg_slide4.jpg bg_slide4.webp
