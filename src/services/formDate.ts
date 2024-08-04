const formatDate = (dateString:string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-CA'); // Format YYYY-MM-DD
  };
  
export {formatDate}