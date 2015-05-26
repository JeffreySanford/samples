/* An example of objects and arrays in pure Javascript */

var authors = {

    "1" : {
        ID: 1,
        name: "Ernest Hemingway",
        born: "July 21, 1899", //convert to JS Date
        died: "July 2, 1961", //convert to JS Date
        books: [
            { bookIndex: 1, title: "Indian Camp", date: 1926 },
            { bookIndex: 2, title: "The Sun Also Rises", date: 1926 },
            { bookIndex: 3, title: "A Farewell to Arms", date: 1929 },
            { bookIndex: 4, title: "The Short Happy Life of Francis Macomber", date: 1935 },
            { bookIndex: 5, title: "For Whom the Bell Tolls", date: 1940 },
            { bookIndex: 6, title: "The Old Man and the Sea", date: 1951 }
        ],
    },

    "2" : {
        ID: 2,
        name: "John Steinbeck",
        born: "February 27, 1902",
        died: "December 20, 1968",
        books: [
            { bookIndex: 1, title: "Cup of Gold", date: 1929 },
            { bookIndex: 2, title: "The Pastures of Heaven", date: 1932 },
            { bookIndex: 3, title: "To a God Unknown", date: 1933 },
            { bookIndex: 4, title: "Tortilla Flat", date: 1935 },
            { bookIndex: 5, title: "In Dubious Battle", date: 1936 },
            { bookIndex: 6, title: "Of Mice and Men", date: 1937 }
        ]
    },		

    listBooks: function (index) {
    // Not used
        //set the counter for books
        var i = 0;
        //Select the individual author
        var author = authors[index];
        // List the books of an author here
        document.write("Author Name:" + authors[index].name);
        document.write("<br />");
        for (i; i<authors[index].books.length; i++) {
            document.write("Book Index: " + authors[index].books[i].bookIndex + "<br />");
            document.write("Book Title: " + authors[index].books[i].title + "<br />");
            document.write("Book Date: " + authors[index].books[i].date + "<br />");
            document.write("<br />");
        }
    },
    //  The two functions need to be refactored 
    showAuthorOne: function() {
        console.log("Show Author One fired.");
        var i = 0;
        document.getElementById("authorInformation").innerHTML = "Author Name: <strong>" + authors[1].name + "</strong><br />";
        document.getElementById("authorInformation").innerHTML += "born:" + authors[1].born + "<br />";
        document.getElementById("authorInformation").innerHTML += "died:" + authors[1].died + "<br />";
        document.getElementById("authorInformation").innerHTML += "<br />";
        for (i; i<authors[1].books.length; i++) {
            document.getElementById("authorInformation").innerHTML += "Book Index: " + authors[1].books[i].bookIndex + "<br />";
            document.getElementById("authorInformation").innerHTML += "Book Title: " + authors[1].books[i].title + "<br />";
            document.getElementById("authorInformation").innerHTML += "Book Date: " + authors[1].books[i].date + "<br />";
            document.getElementById("authorInformation").innerHTML += "<br />";
        }
    },
        showAuthorTwo: function() {
            console.log("Show Author Two fired.");
        var i = 0;
        document.getElementById("authorInformation").innerHTML = "Author Name: <strong>" + authors[2].name + "</strong><br />";
        document.getElementById("authorInformation").innerHTML += "born:" + authors[2].born + "<br />";
        document.getElementById("authorInformation").innerHTML += "died:" + authors[2].died + "<br />";
        document.getElementById("authorInformation").innerHTML += "<br />";
        for (i; i<authors[1].books.length; i++) {
            document.getElementById("authorInformation").innerHTML += "Book Index: " + authors[2].books[i].bookIndex + "<br />";
            document.getElementById("authorInformation").innerHTML += "Book Title: " + authors[2].books[i].title + "<br />";
            document.getElementById("authorInformation").innerHTML += "Book Date: " + authors[2].books[i].date + "<br />";
            document.getElementById("authorInformation").innerHTML += "<br />";
        }
    },	
    // This is a constructor which is similar to OOP classes.  This should be used to refactor the ShowAuthor functions properly 
    // instead of being explicit.
    ConstructorAuthor: function author (name, born, died) {
        this.name = name;
        this.born = born;
        this.died = died;
    }
};
/*  This onload function should be using a closure that calls the specific author's 
    values.
 */
window.onload = function() {
    //  Using innerHTML is not recommend for use in all browsers.
    document.getElementById("listOfAuthors").innerHTML = '<ul style="list-style-type: none;">';
    document.getElementById("listOfAuthors").innerHTML += '<li onclick="authors.showAuthorOne()">' + authors[1].name + "</li>";
    document.getElementById("listOfAuthors").innerHTML += '<li onclick="authors.showAuthorTwo()">' + authors[2].name + "</li>";
    document.getElementById("listOfAuthors").innerHTML += "</ul>";
}