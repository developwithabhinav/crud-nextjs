"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getItem, updateItem } from '../../../utils/crud';
export default function EditPage({ params }: { params: { id: string } }) {
const router = useRouter();
const [name, setName] = useState('');
const [description, setDescription] = useState('');
useEffect(() => {
const item = getItem(Number(params.id));
if (item) {
setName(item.name);
setDescription(item.description);
}
}, [params.id]);
const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
updateItem(Number(params.id), { name, description });
router.push('/');
};
return (
<div>
<h1>Edit Item</h1>
<form onSubmit={handleSubmit}>
<label>
    Name:
    <input
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    />
</label>
<span>
<label className='special'>
Description:
<textarea
value={description}
onChange={(e) => setDescription(e.target.value)}
/>
</label>
</span>
<button type="submit">Update</button>
</form>
</div>
);
}