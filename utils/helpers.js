
module.exports = {
    // Helper function to format date 
    format_date: date => {
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    },
    
    limit: (arr, limit) => {
      if (!Array.isArray(arr)) {
        return [];
      } else {
        return arr.slice(0, limit);
      }
    },

    validate: (array, userId) => {
      // does array post.comment.userId = req.session.userId?
      array.comment.userId = userId;
    },

    ifGreaterThan: (arg1, arg2, options)=> {
        return (arg1 > arg2) ? options.fn(this) : options.inverse(this);
      }
    }
