# NCBI Journal Title Abbreviations

- [National Center for Biotechnology Information][ncbi]
- [National Library of Medicine][nlm]
- [journal catalogue](https://www.ncbi.nlm.nih.gov/nlmcatalog/journals)


## Usage

Most users will mainly be interested in the journal title abbreviation lists
[`ncbi-abbreviations.json`][ncbi.json] and  [`nml-abbreviations.json`][nml.json]
for use with `--citation-abbreviations=`_**FILE**_ in [Pandoc][pandoc].

These users may well disregard below build instructions.

The scope of each and every NCBI journal title abbreviation file is
[described in this section](#json-output).


## Input Files

Three [XML][xml] files need to be downloaded and
stored in the subdirectory `input/` prior to building:

- [`ncbi.xml`](https://www.ncbi.nlm.nih.gov/nlmcatalog/?term=ncbijournals)
- [`medline.xml`](https://www.ncbi.nlm.nih.gov/nlmcatalog?term=currentlyindexed)
- [`pmc.xml`](https://www.ncbi.nlm.nih.gov/nlmcatalog?term=journalspmc)

Click on the above web links to open the respective journal catalogues.

Use the `Send to` dialogue at the bottom of each web page
to save the entire catalogue as an XML file:

![](screenshot/send_to.png)

BEWARE: The journal catalogues in XML format are huge files of
tens to several hundreds megabyte!


## Other Requirements

Most of the heavy lifting in extracting the relevant [XML][xml] data to build
the [JSON][json] journal abbreviation lists is done by
the [XSLT][xslt] processor [`xsltproc`][xsltproc] on the basis of
the [`ncbi-abbeviations.xls`][ncbi.xsl] style sheet.

Use the package manager of your operating system to install `xsltproc`.
`brew` and `choco` are recommended package managers for
respectively macOS and Windows. See also: <http://xmlsoft.org/downloads.html>

```bash
$ sudo apt install xsltproc
$ sudo dnf install xsltproc
$ sudo yum install xsltproc
$ brew install xsltproc
> choco install xsltproc
```


## Build

The [`makefile`](../../../blob/master/ncbi/makefile) contains the entire recipe
to build the desired JSON journal abbreviation lists from the XML input files.
The journal abbreviation lists are made by evoking the following shell command:

```bash
$ make -B
```


## JSON Output

The [JSON][json] output files are
for use with `--citation-abbreviations=`_**FILE**_ in [Pandoc][pandoc] and
are to be found in the subdirectory [`json/`](../../../blob/master/ncbi/json/):

- [`ncbi-abbreviations.json`][ncbi.json] are the abbreviations of over 38000 journal titles _referenced_ in the databases of the [National Center for Biotechnology Information][ncbi].
- [`nml-abbreviations.json`][nml.json] are the abbreviations of over 7400 biomedical and life sciences journal titles; obtained by combining below two JSON files.
- [`medline-abbreviations.json`][medline.json] are the abbreviations of over 5200 academic journal titles _indexed_ in the [MEDLINE][medline] database. Topics cover medicine, nursing, pharmacy, dentistry, veterinary medicine, health care, biology, biochemistry and molecular evolution.
- [`pmc-abbreviations.json`][pmc.json] are the abbreviations of nearly 3000 biomedical and life sciences journal titles of which the full text remains always freely available through [PubMed Central][pmc]. PMC is not a subset of MEDLINE, but there is some overlap.


## Privacy

No Internet connection is established when building the JSON files
of this repository using the `make -B` shell command.


## License

Copyright (c) 2021 Serge Y. Stroobandt

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Contact

```bash
$ echo c2VyZ2VAc3Ryb29iYW5kdC5jb20K |base64 -d
```


[nlm]:     https://en.wikipedia.org/wiki/United_States_National_Library_of_Medicine
[ncbi]:    https://en.wikipedia.org/wiki/National_Center_for_Biotechnology_Information
[medline]: https://en.wikipedia.org/wiki/MEDLINE
[pmc]:     https://en.wikipedia.org/wiki/PubMed_Central

[pandoc]:   https://pandoc.org/MANUAL.html#specifying-a-citation-style
[xml]:      https://en.wikipedia.org/wiki/XML
[xslt]:     https://en.wikipedia.org/wiki/XSLT
[xsltproc]: https://en.wikipedia.org/wiki/Libxslt
[ncbi.xsl]: ../../../blob/master/ncbi/xsl/ncbi-abbreviations.xsl

[json]:         https://en.wikipedia.org/wiki/JSON
[ncbi.json]:    ../../../blob/master/ncbi/json/ncbi-abbreviations.json
[medline.json]: ../../../blob/master/ncbi/json/medline-abbreviations.json
[pmc.json]:     ../../../blob/master/ncbi/json/pmc-abbreviations.json
[nml.json]:     ../../../blob/master/ncbi/json/nml-abbreviations.json
