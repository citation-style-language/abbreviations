

#  DESCRIPTION
#
#    This makefile builds journal title abbreviation lists
#    for journals referenced in the XML catalogues
#    of the National Center for Biotechnology Information.
#
#    The resulting JSON files are for use with--citation-abbreviations=FILE
#    in Pandoc.


#  REQUIREMENTS, USAGE & PRIVACY
#
#    See:
#    https://github.com/citation-style-language/abbreviations/tree/master/ncbi


#  LICENSE
#
#    Copyright (c) 2021 Serge Y. Stroobandt
#
#    MIT License
#
#    Permission is hereby granted, free of charge, to any person obtaining a
#    copy of this software and associated documentation files (the "Software"),
#    to deal in the Software without restriction, including without limitation
#    the rights to use, copy, modify, merge, publish, distribute, sublicense,
#    and/or sell copies of the Software, and to permit persons to whom the
#    Software is furnished to do so, subject to the following conditions:
#
#    The above copyright notice and this permission notice shall be included in
#    all copies or substantial portions of the Software.
#
#    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
#    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
#    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
#    THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
#    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
#    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
#    DEALINGS IN THE SOFTWARE.


#  CONTACT
#
#    $ echo c2VyZ2VAc3Ryb29iYW5kdC5jb20K |base64 -d


SHELL := /usr/bin/env bash


all: json/ncbi-abbreviations.json json/nlm-abbreviations.json


json/ncbi-abbreviations.json: input/ncbi.xml
	mkdir -p json
	xsltproc --novalid --output $@ xsl/ncbi-abbreviations.xsl $<
	# Remove lines with 5 or more " double quotes.
	sed -i '/\("[^"]*\)\{5\}/d' $@


json/medline-abbreviations.json: input/medline.xml
	mkdir -p json
	xsltproc --novalid --output $@ xsl/ncbi-abbreviations.xsl $<
	# Remove lines with 5 or more " double quotes.
	sed -i '/\("[^"]*\)\{5\}/d' $@


json/pmc-abbreviations.json: input/pmc.xml
	mkdir -p json
	xsltproc --novalid --output $@ xsl/ncbi-abbreviations.xsl $<
	# Remove lines with 5 or more " double quotes.
	sed -i '/\("[^"]*\)\{5\}/d' $@


json/nlm-abbreviations.json: json/medline-abbreviations.json json/pmc-abbreviations.json
	{ 	sed '1,2d; $$ s/$$/,/' <(head -n -3 json/medline-abbreviations.json) ;   \
		sed '1,2d; $$ s/$$/,/' <(head -n -3 json/pmc-abbreviations.json)     ; } \
	|sort -u \
	|sed '1i { "default": {\n    "container-title": {' \
	|sed '$$ s/,$$/\n    }\n  }\n}/' \
	> $@
