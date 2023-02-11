
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
  };
