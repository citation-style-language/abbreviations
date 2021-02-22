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
