# Karma-Read-JSON
Karma helper function to make reading JSON files easier

## Install

`bower install karma-read-json`

## Usage

1. Put karma-read-json.js in your Karma files, Example:

        files = [
        ...
        'bower_components/karma-read-json/karma-read-json.js',
        ...
        ]

2. Make sure your JSON is being served by Karma, Example:

        files = [
        ...
        {pattern: 'json/**/*.json', included: false},
        ...
        ]

3. Use the `readJSON` function in your tests. Example:

        var valid_respond = readJSON('json/foobar.json');
        $httpBackend.whenGET(/.*/).respond(valid_respond);
