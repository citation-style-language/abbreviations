#!/usr/bin/python

import os

files = ['J_Entrez.txt', 'J_Medline.txt', 'J_Sequence.txt']
output_file = 'abbreviations.txt'

def prepare_abbreviation(full, abbreviated):
    fullList = full.lower().split(' ')
    abbreviatedList = abbreviated.split(' ')

    polishedAbbreviation = ''

    for word in abbreviatedList:
        if polishedAbbreviation != '':
	    polishedAbbreviation += ' '

        if word.lower() in fullList:
	    polishedAbbreviation += word
	else:
	    polishedAbbreviation += word + '.'

    return polishedAbbreviation

def process_file(file, abbreviations):
    f = open(file, 'r')

    journalTitle = ''
    journalAbbreviation = ''

    for line in f:
        line = line.rstrip('\n')

	if line.startswith('JrId'):
	    if journalTitle != '' and journalAbbreviation != '':
	        abbreviations[journalTitle] = prepare_abbreviation(journalTitle, journalAbbreviation)

	    if journalTitle == '' or journalAbbreviation == '':
	        print "Journal without abbreviation:", journalTitle, journalAbbreviation

	    journalTitle = ''
	    journalAbbreviation = ''

	if line.startswith('JournalTitle: '):
	    journalTitle = line.split(' ', 1)[1]

	if line.startswith('MedAbbr: '):
	    journalAbbreviation = line.split(' ',1)[1]

def process_files(files, abbreviations):
    for file in files:
        process_file(file, abbreviations)

if __name__ == '__main__':
    abbreviations = {}
    process_files(files, abbreviations)

    list_of_journals = sorted(abbreviations.iterkeys())
    
    f = open(output_file, "w")
    f.write("# List created using the lists from:\n")
    f.write("# http://www.ncbi.nlm.nih.gov/books/NBK3827/table/pubmedhelp.pubmedhelptable45/\n")
    f.write("\n")

    for journal in list_of_journals:
        f.write(journal + '\t' + abbreviations[journal] + '\n');

    f.close()

    print
    print "Output in file: %s" % (output_file)
