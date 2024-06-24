#!/bin/bash
#File: Linux-Init.sh

cd ~

# oh-my-posh requires unzip to run
sudo apt-get update
sudo apt-get install unzip

# Install oh-my-posh in ~/Linux-Init
mkdir ./Linux-Init
sudo curl -s https://ohmyposh.dev/install.sh | sudo bash -s -- -d ~/Linux-Init

# Import the jblab_2021.omp.json posh theme
curl https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/jblab_2021.omp.json > ./Linux-Init/jblab_2021.omp.json

# Run oh-my-posh on start up
printf '\n#Adds oh-my-posh as an environment variable\nPATH=$PATH:$(pwd)/Linux-Init\n' >> .bashrc
printf '\n#Adds posh on bash start-up\neval "$(oh-my-posh --init --shell bash --config ~/Linux-Init/jblab_2021.omp.json)"\n' >> .bashrc

# Install fastfetch
sudo apt update
sudo add-apt-repository ppa:zhangsongcui3371/fastfetch -y
sudo apt install fastfetch

# Run fastfetch on startup
fastfetch
printf '\n#Adds fastfetch on start-up\nfastfetch\n' >> .bashrc

# Create vim directory
mkdir ./.vim
mkdir ./.vim/colors
mkdir ./.vim/autoload

# Installs onedark themes
curl https://raw.githubusercontent.com/joshdick/onedark.vim/main/colors/onedark.vim > ./.vim/colors/onedark.vim
curl https://raw.githubusercontent.com/joshdick/onedark.vim/main/autoload/onedark.vim > ./.vim/autoload/onedark.vim

# Adds onedark themes to .vimrc
curl https://raw.githubusercontent.com/iWolf22/Linux-Init/main/.vimrc > ./.vimrc

# Installs Vundle (vim package manager), vim-airline, and vim-airline-themes (adds a fancy bar in the bottom of vim)
sudo apt install git
sudo git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
sudo git clone https://github.com/vim-airline/vim-airline ~/.vim/bundle/vim-airline
sudo git clone https://github.com/vim-airline/vim-airline-themes ~/.vim/bundle/vim-airline-themes

# Installs the onedark theme for vim-airline
mkdir ./.vim/autoload/airline
mkdir ./.vim/autoload/airline/themes
curl https://raw.githubusercontent.com/joshdick/onedark.vim/main/autoload/airline/themes/onedark.vim > ~/.vim/autoload/airline/themes/onedark.vim


echo ██╗░░░░░██╗███╗░░██╗██╗░░░██╗██╗░░██╗░░░░░░██╗███╗░░██╗██╗████████╗
echo ██║░░░░░██║████╗░██║██║░░░██║╚██╗██╔╝░░░░░░██║████╗░██║██║╚══██╔══╝
echo ██║░░░░░██║██╔██╗██║██║░░░██║░╚███╔╝░█████╗██║██╔██╗██║██║░░░██║░░░
echo ██║░░░░░██║██║╚████║██║░░░██║░██╔██╗░╚════╝██║██║╚████║██║░░░██║░░░
echo ███████╗██║██║░╚███║╚██████╔╝██╔╝╚██╗░░░░░░██║██║░╚███║██║░░░██║░░░
echo ╚══════╝╚═╝╚═╝░░╚══╝░╚═════╝░╚═╝░░╚═╝░░░░░░╚═╝╚═╝░░╚══╝╚═╝░░░╚═╝░░░