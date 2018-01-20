/*
* Hometask 2
* Task 4 Aggregate Enron Collection
* */

/*
* Inspect a few of the documents to get a basic understanding of the structure. Enron was an American corporation that
* engaged in a widespread accounting fraud and subsequently failed.
*
* In this dataset, each document is an email message. Like all Email messages, there is one sender but there can be multiple recipients.
* For this task you will use the aggregation framework to figure out pairs of people that tend to communicate a lot.
* To do this, you will need to unwind the To list for each message.
* This problem is a little tricky because a recipient may appear more than once in the To list for a message.
* You will need to fix that in a stage of the aggregation before doing your grouping and counting of (sender, recipient) pairs.
* Which pair of people have the greatest number of messages in the dataset?
* For you reference the number of messages from phillip.love@enron.co to sladana-anna.kulic@enron.com is 144.
*
*/

cursor = db.airlines.aggregate([
    {

    }
]);

/* Output */
while (cursor.hasNext()) {
    printjson(cursor.next());
}