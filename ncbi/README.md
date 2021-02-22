# NCBI

[NCBI NLM catalog](https://www.ncbi.nlm.nih.gov/nlmcatalog/journals)


## Usage


## Input Files

Three [XML](https://en.wikipedia.org/wiki/XML) files need to be downloaded and 
stored in the subdirectory `input/` prior to building:

- [`ncbi.xml`](https://www.ncbi.nlm.nih.gov/nlmcatalog/?term=ncbijournals)
- [`medline.xml`](https://www.ncbi.nlm.nih.gov/nlmcatalog?term=currentlyindexed)
- [`pmc.xml`](https://www.ncbi.nlm.nih.gov/nlmcatalog?term=journalspmc)


Use the `Send to` dialogue at the bottom of the web page
to save the entire catalogue as an XML file:

![](screenshot/send_to.png)


## Other Requirements


## Build

[`makefile`](../../../blob/master/ncbi/makefile)


## JSON Output

The output [JSON](https://en.wikipedia.org/wiki/JSON) files
for use with `--citation-abbreviations=`_**FILE**_
in [Pandoc](https://pandoc.org/MANUAL.html#specifying-a-citation-style)
are found in the subdirectory [`json/`](../../../blob/master/ncbi/json/):

- [`ncbi-abbreviation.json`][ncbi.json]: The abbreviations of over 38000 journals _referenced_ in the databases of the [National Center for Biotechnology Information][ncbi].
- [`medline-abbreviation.json`][medline.json]:
- [`pmc-abbreviation.json`][pmc.json]:
- [`nml-abbreviation.json`][nml.json]:


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


[ncbi.json]: ../../../blob/master/ncbi/json/ncbi-abbreviations.json
[medline.json]: ../../../blob/master/ncbi/json/medline-abbreviations.json
[pmc.json]: ../../../blob/master/ncbi/json/pmc-abbreviations.json
[nml.json]: ../../../blob/master/ncbi/json/nml-abbreviations.json
[ncbi]: https://en.wikipedia.org/wiki/National_Center_for_Biotechnology_Information
