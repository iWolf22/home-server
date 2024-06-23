#!/bin/bash
#File: Linux-Init.sh

cd ~

sudo apt-get update
sudo apt-get install unzip

mkdir ./Linux-Init
sudo curl -s https://ohmyposh.dev/install.sh | sudo bash -s -- -d ~/Linux-Init

curl https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/jblab_2021.omp.json > ./Linux-Init/jblab_2021.omp.json

printf '\n#Adds oh-my-posh as an environment variable\nPATH=$PATH:$(pwd)/Linux-Init\n' >> .bashrc
printf '\n#Adds posh on bash start-up\neval "$(oh-my-posh --init --shell bash --config ~/Linux-Init/jblab_2021.omp.json)"\n' >> .bashrc

sudo apt update
sudo add-apt-repository ppa:zhangsongcui3371/fastfetch -y
sudo apt install fastfetch

fastfetch
printf '\n#Adds fastfetch on start-up\nfastfetch\n' >> .bashrc

mkdir ./.vim
mkdir ./.vim/colors
mkdir ./.vim/autoload

curl https://raw.githubusercontent.com/joshdick/onedark.vim/main/colors/onedark.vim > ./.vim/colors/onedark.vim
curl https://raw.githubusercontent.com/joshdick/onedark.vim/main/autoload/onedark.vim > ./.vim/autoload/onedark.vim