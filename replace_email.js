const fs = require('fs');
const path = require('path');

const dir = './';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace names
    content = content.replace(/info@thebuddhagym\.com/g, 'contact@yourgymname.com');
    
    fs.writeFileSync(file, content);
});

console.log('Fixed email');
