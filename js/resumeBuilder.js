// Data objects used to fill-in resume:
//------------------------------------
var work = {
    "jobs": [
        {
            "employer": "Frankish Empire",
            "title": "King of the Franks",
            "location": "Aachen, Germany",
            "dates": "795 - 822",
            "description": "Ruling the Frankish Empire"
        },
        {
            "employer": "El Camino College",
            "title": "Professor of Mathematics",
            "location": "Torrance, CA, USA",
            "dates": "August, 1977 - December, 2012",
            "description": "Teaching mathematics and computer science"
        }
    ],
    "display": function () {
        for (job in work.jobs) {
            $('#workExperience').append(HTMLworkStart);
            var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            $('.work-entry:last').append(employer + title);
            var dates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $('.work-entry:last').append(dates);
            var description = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $('.work-entry:last').append(description);
        }
    }
};

var projects = {
    "project": [
        {
            "title": "Mariesa's Wedding",
            "dates": "November, 2013 - December, 2013",
            "description": "Website containing photos of my daughter's wedding",
            "images": [
                "images/WedFront.png",
                "images/WedPic.png"
            ]
        },
        {
            "title": "Trip to Greece and Turkey, 2014",
            "dates": "June, 2014 - July, 2014",
            "description": "Website containing photos of our trip",
            "images": [
                "images/TripFront.png",
                "images/TripPic.png"
            ]
        }
    ],
    "display": function () {
        for (var p in projects.project) {
            $('#projects').append(HTMLprojectStart);
            var title = HTMLprojectTitle.replace("%data%", projects.project[p].title);
            $('.project-entry:last').append(title);
            var dates = HTMLprojectDates.replace("%data%", projects.project[p].dates);
            $('.project-entry:last').append(dates);
            var description = HTMLprojectDescription.replace("%data%", projects.project[p].description);
            $('.project-entry:last').append(description);
            var image;
            for (var img in projects.project[p].images) {
                image = HTMLprojectImage.replace("%data%", projects.project[p].images[img]);
                $('.project-entry:last').append(image);
            }
        }
    }
};
//---------------------------------------------------
var bio = {
    "name": "Joe Hyman",
    "role": "Web Developer",
    "welcomeMessage": "\"Whatever you do will be insignificant, but it is very important that you do it\". (Mahatma Gandhi)",
    "contacts": {
        "mobile": "310-528-9999",
        "email": "jhyman@cox.net",
        "github": "jehyman",
        "twitter": "@Joe",
        "location": "Rancho Palos Verdes, CA, USA"
    },
    "skills": [
        { "name": "Teaching",       "level": 8 },
        { "name": "Mathematics",    "level": 9 },
        { "name": "C++",            "level": 8 },
        { "name": "C#",             "level": 8 },
        { "name": "Java",           "level": 5 },
        { "name": "Html",           "level": 2 },
        { "name": "Css",            "level": 2 },
        { "name": "Javascript",     "level": 4 }
    ],
    "display": function () {
        // formatted data strings
        var name = HTMLheaderName.replace("%data%", bio.name);
        var role = HTMLheaderRole.replace("%data%", bio.role);
        var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var email = HTMLemail.replace("%data%", bio.contacts.email);
        var gitHub = HTMLgithub.replace("%data%", bio.contacts.github);
        var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var loc = HTMLlocation.replace("%data%", bio.contacts.location);
        var pic = HTMLbioPic.replace("%data%", "images/Joe.jpg");
        var welcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
        // display name & role
        $('#header').prepend(role).prepend(name);
        // display contact info in header
        $('#topContacts').append(mobile).append(email).append(gitHub).append(loc);
        // display contact info in footer
        $('#footerContacts').append(mobile).append(email).append(gitHub).append(loc);
        // display picture
        $('ul:first').after(pic);  // check===========================/
        // display welcome message
        $('#header').append(welcomeMsg);
        // display skills at a glance
        if (bio.skills && bio.skills.length > 0) {
            $('#header').append(HTMLskillsStart);
            var nextSkill;
            for (var i = 0; i < bio.skills.length; i++) {
                nextSkill = HTMLskills.replace("%data%", bio.skills[i].name);
                $('#skills').append(nextSkill);
            }
        }
        // display skills chart
        $('#skillsChart').append(HTMLskillsChartStart);
        // using "d3js"
        var topDiv = d3.select(".skills-entry")
            .selectAll("div")
            .data(bio.skills);
        var topDivEnter = topDiv.enter().append("div").classed("row", true);

        topDivEnter.append("div").classed("skill", true).text(function (d) { return d.name; });

        topDivEnter.append("div").classed("bar", true)
            .style('width', function (d) { return d.level * 20 + "px"; })
            .style('text-align','center')
            .text(function (d) { return d.level; });

    }
};
//var HTMLskillsChartStart = "<div class='skills-entry'></div>";

var education = {
    "schools": [
        {
            "name": "Oberlin College",
            "location": "Oberlin, OH, USA",
            "degree": "BA in Mathematics",
            "majors": [
                "Mathematics"
            ],
            "dates": "1963 - 1967",
            "url": "http://www.Oberlin.edu"
        },
        {
            "name": "UCLA",
            "location": "Westwood, CA, USA",
            "degree": "PH. D. in Mathematics",
            "majors": [
                "Mathematics"
            ],
            "dates": "1967 - 1972",
            "url": "http://www.ucla.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Web Development",
            "school": "Udacity",
            "dates": "April, 2013 - May, 2013",
            "url": "https://www.udacity.com/course/cs253"
        }
    ],
    "display": function () {
        // display schools
        for (var school in education.schools) {
            $('#education:last').append(HTMLschoolStart);
            var name = HTMLschoolName.replace("%data%", education.schools[school].name);
            name = name.replace("#", education.schools[school].url);
            var degree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            $('.education-entry:last').append(name + degree);
            var dates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            $('.education-entry:last').append(dates);
            var location = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            $('.education-entry:last').append(location);
            for (major in education.schools[school].majors) {
                var theMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
                $('.education-entry:last').append(theMajor);
            }
        }

        // display online courses
        if (education.onlineCourses.length > 0) {
            $('#education').append(HTMLonlineClasses);
            for (var course in education.onlineCourses) {
                var title = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
                title = title.replace("#", "images/certificate.pdf");
                var school = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
                $('#onLine').append(title + school);                                                //  <<=== CHECK!!!
                var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
                $('#onLine').append(onlineDates);
                var url = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
                url = url.replace("#", education.onlineCourses[course].url);
                $('#onLine').append(url);
            }
        }
    }
};
//--------------------------------------
// Used when internationalizeButton clicked to change bio.name in the header
function inName(inName) {
    var names = inName.trim().split(" ");
    return names[0][0].toUpperCase() + names[0].slice(1).toLowerCase() + " " + names[1].toUpperCase();
}
//============================================================================================
// Fill-in the resume data
$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);
//--------------------------------------
bio.display();
work.display();
projects.display();
education.display();
//=============================================================================================
// Below is the html for the infoWindows, this is indexed on the "place name".
var locationHTML = {
    "Westwood, Los Angeles, CA, USA":
        "<div class=\"info-content\">" +
          "<h1>UCLA</h1>" +
          "<div >" +
           "<img src='images/UCLA.jpg'>" +
          "</div>" +
          "<a href=\"http://www.UCLA.edu\">More information</a>" +
        "</div>",
    "Rancho Palos Verdes, CA, USA":
         "<div class=\"info-content\">" +
          "<h1>Palos Verdes</h1>" +
          "<div >" +
           "<img src='images/RPV.jpg'>" +
          "</div>" +
          "<a href=\"http://www.UCLA.edu\">More information</a>" +
        "</div>",
    "Torrance, CA, USA":
        "<div class=\"info-content\">" +
          "<h1>El Camino College</h1>" +
          "<div >" +
           "<img src='images/ElCamino.jpg'>" +
          "</div>" +
          "<a href=\"http://www.ElCamino.edu\">More information</a>" +
        "</div>",
    "Oberlin, OH 44074, USA":
        "<div class=\"info-content\">" +
          "<h1>Oberlin College</h1>" +
          "<div >" +
           "<img src='images/Oberlin.jpg'>" +
          "</div>" +
          "<a href=\"http://www.Oberlin.edu\">More information</a>" +
        "</div>",
    "Aachen, Germany":
         "<div class=\"info-content\">" +
          "<h1>Frankish Empire</h1>" +
          "<div >" +
           "<img src='images/frankish_empire.jpg'>" +
          "</div>" +
          "<a href=\"http://www.Oberlin.edu\">More FIXXX information</a>" +
        "</div>"
};
