# Introduction
[NCBI NLM catalog](https://www.ncbi.nlm.nih.gov/nlmcatalog/journals)

# Usage


# Input Files
Three [XML](https://en.wikipedia.org/wiki/XML) files need to be downloaded and 
stored in the subdirectory `input/`:

- [`ncbi.xml`](https://www.ncbi.nlm.nih.gov/nlmcatalog/?term=ncbijournals)
- [`medline.xml`](https://www.ncbi.nlm.nih.gov/nlmcatalog?term=currentlyindexed)
- [`pmc.xml`](https://www.ncbi.nlm.nih.gov/nlmcatalog?term=journalspmc)


Use the `Send to` dialogue at the bottom of the web page
to save the entire catalogue as an XML file:

![](screenshot/send_to.png)


# Other Requirements


# Build
[`makefile`](../../../blob/master/ncbi/makefile)


# JSON Output
The output [JSON](https://en.wikipedia.org/wiki/JSON) files
for use with `--citation-abbreviations=`_**FILE**_
in [Pandoc](https://pandoc.org/MANUAL.html#specifying-a-citation-style)
are found in the subdirectory [`json/`](../../../blob/master/ncbi/json/):

- [`ncbi-abbreviation.json`][ncbi.json]: The abbreviations of over 38000 journals _referenced_ in the databases of the [National Center for Biotechnology Information][ncbi].
- [`medline-abbreviation.json`][medline.json]:
- [`pmc-abbreviation.json`][pmc.json]:
- [`nml-abbreviation.json`][nml.json]:


# Privacy
No Internet connection is established when building the JSON files
of this repository using the `make -B` shell command.


# License

[ncbi.json]: ../../../blob/master/ncbi/json/ncbi-abbreviations.json
[medline.json]: ../../../blob/master/ncbi/json/medline-abbreviations.json
[pmc.json]: ../../../blob/master/ncbi/json/pmc-abbreviations.json
[nml.json]: ../../../blob/master/ncbi/json/nml-abbreviations.json
[ncbi]: https://en.wikipedia.org/wiki/National_Center_for_Biotechnology_Information
