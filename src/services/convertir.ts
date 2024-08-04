export function convertForTagOrClassOrID(input: string, ref: string): string {
    const delimiter = ref === 'className' ? '.' : ref === 'id' ? '#' : '';
    
    if (delimiter) {
      return input.split(' ').map(part => `${delimiter}${part}`).join('');
    }
  
    return input;
  }
  
  
  

  