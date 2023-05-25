function solution(rating) {
    let arrRating = [];
    if(rating === 'upvote') {
        this.upvotes+=1;
    } else if(rating === 'downvote') {
        this.downvotes+=1;
    } else if(rating === 'score') {
        let upvote = this.upvotes;
        let downvote = this.downvotes;
        let totalVotes = upvote + downvote;
        let balance = upvote - downvote;
        let rate = '';

        if(upvote > totalVotes * 0.66) {
            rate = 'hot';
        } else if(balance >= 0 &&  (upvote > 100 || downvote > 100)) {
             rate = 'controversial';
        } else if(balance < 0) {
            rate = 'unpopular';
        } else if(totalVotes < 10) {
            rate = 'new';
        }
    
    if(totalVotes > 50) {
        let greaterValue = upvote > downvote ? upvote : downvote;
        let inflatedScore = Math.ceil(greaterValue * 0.25);
       let reportedUpvotes = upvote+ inflatedScore;
       let reportedDownvotes = downvote+ inflatedScore;
       return [reportedUpvotes,reportedDownvotes,balance,rate];
    }
    return [upvote, downvote, balance, rate];
}
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