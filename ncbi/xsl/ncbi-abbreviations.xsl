<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet  version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:output  method="text" indent="yes" media-type="text/json" omit-xml-declaration="yes"/>

    <xsl:template match="/">{ "default": {
    "container-title": {
        <xsl:for-each select="NLMCatalogRecordSet/NCBICatalogRecord/JrXml">"<xsl:value-of select="Serial/Title"/>": "<xsl:value-of select="Serial/MedlineTA"/>"<xsl:if test="not(position() = last())">,
        </xsl:if>
        </xsl:for-each>
    }
  }
}</xsl:template>

</xsl:stylesheet>
