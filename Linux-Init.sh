#!/bin/bash
#File: Linux-Init.sh

cd ~

apt-get update
apt-get install unzip

curl -s https://ohmyposh.dev/install.sh | bash -s

oh-my-posh init pwsh --config "~/.poshthemes/jblab_2021.omp.json" | Invoke-Expression

echo "# oh-my-posh setup\neval \"$(oh-my-posh --init --shell bash --config ~/.poshthemes/jblab_2021.omp.json)\""