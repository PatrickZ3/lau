# MySQL + Next.js Database Connection Guide

halo lau imma assume u udh set up the database correctly and cuman mau show it in front end

these are the things i did

---

## Project Setup

pertama di **my-app** (the main file might be diff in urs) gua add ini file namanya **`lib`**  

trs w add my scripts for the database.

- **data-fetch.js** (ini buat connecting databse to front end)  
- **db.js** (ini like ur setup for ur database)  
- **text-db.js** (ini u can test in terminal by running `node lib/text-db.js` it will show the content in ur database)  

---

## db.js Setup

in **db.js** u need to add this line for socketPath

```javascript
password: '2688',              
database: 'myapp',                // your database name 
socketPath: '/tmp/mysql.sock',    // add this line <-----
waitForConnections: true,
connectionLimit: 10,
```

## package.json Setup
trs in ur package.json file u need to add this line:

```json
"name": "my-app",
"version": "0.1.0",
"type": "module",   <----
"private": true,
```

Preparation of pulling data from database itu done.
Tinggal just show the data to FE

## Frontend Integration

itu di src/app/page.tsx

penting" nya:

```typescript
import { getAllUsers } from '../../lib/data-fetch';

const result = await getAllUsers();
let users: any[] = [];

if (Array.isArray(result)) {
  users = result;
} else if ('rows' in result && Array.isArray((result as any).rows)) {
  users = (result as any).rows;
}
```

## Table Rendering Example

```tsx
<tbody className="bg-white divide-y divide-gray-200">
  {users.map((item) => (
    <tr key={item.id} className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.name}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.age}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.favorite_color}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.created_at?.toString()}</td>
    </tr>
  ))}
</tbody>
```

## Summary
Create a lib folder with data-fetch.js, db.js, and text-db.js.

Add the socketPath config in db.js and "type": "module" in package.json.

Fetch the data in page.tsx and display it in a table like the example above.




