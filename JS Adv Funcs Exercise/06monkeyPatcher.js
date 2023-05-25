function solution(rating) {
    let arrRating = [];
    if(rating === 'upvote') {
        this.upvotes+=1;
    } else if(rating === 'downvote') {
        this.downvotes+=1;
    } else if(rating === 'score') {
        let totalVotes = this.upvotes + this.downvotes;
        let reportedUpvotes = 0;
        let reportedDownvotes = 0;
        if(totalVotes > 50) {
            let greaterValue = this.upvotes > this.downvotes ? this.upvotes : this.downvotes;
            let inflatedScore = Math.ceil(greaterValue * 0.25);
           reportedUpvotes+= this.upvotes+ inflatedScore;
           reportedDownvotes+= this.downvotes+ inflatedScore;
        } else {
            reportedUpvotes = this.upvotes
            reportedDownvotes = this.downvotes
        }
        arrRating.push(reportedUpvotes);
        arrRating.push(reportedDownvotes);
        let percentage = (reportedUpvotes * 100) / (reportedDownvotes + reportedUpvotes);
        let balance = reportedUpvotes - reportedDownvotes;
        arrRating.push(balance);
        if(balance > 66) {
            arrRating.push('hot');
        } else if(balance >= 0 && reportedUpvotes + reportedDownvotes > 100) {
            arrRating.push('controversial');
        } else if(balance < 0) {
            arrRating.push('unpopular');
        } else if(reportedDownvotes+reportedDownvotes < 10) {
            arrRating.push('new');
        }
    }
    return arrRating;
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
   };
   solution.call(post, 'upvote');
   solution.call(post, 'downvote');
   let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
   solution.call(post, 'downvote'); // (executed 50 times)
   score = solution.call(post, 'score');