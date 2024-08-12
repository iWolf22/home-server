" Disable compatibility with vi which can cause unexpected iss
set nocompatible

" Enable type file detection. Vim will be able to try to detec
filetype on

" Enable plugins and load plugin for the detected file type.
filetype plugin on

" Load an indent file for the detected file type.
filetype indent on

" Turn syntax highlighting on.
syntax on

" Add numbers to each line on the left-hand side.
set number

" Highlight cursor line underneath the cursor horizontally.
set cursorline

" Do not wrap lines. Allow long lines to extend as far as the
set nowrap

" Set shift width to 4 spaces.
set shiftwidth=4

" Scroll by 1 character
set sidescroll=1

" Set tab width to 4 columns.
set tabstop=4

" Use space characters instead of tabs.
set expandtab

if has('termguicolors')
    " Turns on true terminal colors
    let &t_8f = "\<Esc>[38;2;%lu;%lu;%lum"
    let &t_8b = "\<Esc>[48;2;%lu;%lu;%lum"

    " Turns on 24-bit RGB color support
    set termguicolors

    " Defines how many colors should be used. (maximum: 256, minimum: 0)
    set t_Co=256
endif

" Adds onedark vim colors
set background=dark
colorscheme onedark

set nocompatible              " required
filetype off                  " required

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'

" Adds airline plugins
Plugin 'vim-airline/vim-airline'
Plugin 'vim-airline/vim-airline-themes'

" Sets airline to the onedark theme
let g:airline_theme='onedark'

" Adds triangles to the airline
let g:airline_powerline_fonts = 1 

call vundle#end()            " required
filetype plugin indent on    " required
