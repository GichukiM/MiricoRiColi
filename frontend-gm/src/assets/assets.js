import Hero1 from './Hero-1.jpg';
import Hero2 from './Hero-2.jpg';
import Hero3 from './Hero-3.jpg';
import Hero4 from './Hero-4.jpg';
import Wallet1 from './wallet.jpg';
import Wallet2 from './wallet2.jpg';
import Wallet3 from './wallet3.jpg';
import shoeCare1 from './CK.jpg';
import shoeCare2 from './CK2.jpg';
import shoeCare3 from './CK3.jpg';
import LeatheBelt1 from './leather-belt.jpg';
import LeatheBelt2 from './leather-belt2.jpg';
import LeatheBelt3 from './leather-belt3.jpg';

export const assets = {
    Hero1,
    Hero2,
    Hero3,
    Hero4,
    Wallet1,
    Wallet2,
    Wallet3,
    shoeCare1,
    shoeCare2,
    shoeCare3,
    LeatheBelt1,
    LeatheBelt2,
    LeatheBelt3,
}

export const products = [
    {
        _id: 'a1',
        name: 'Shoe One',
        description: 'A shoe made from leather',
        price: 150,
        image: [Hero1, Wallet1, Wallet2],
        category: 'Oxford',
        subCategory: 'Chelsea Boots',
        sizes: ['S', 'M', 'L'],
        date: 25112024,
        bestSeller: true,
    },
    {
        _id: 'a2',
        name: 'Shoe Two',
        description: 'A shoe made from leather',
        price: 120,
        image: [Hero2],
        category: 'Derbies',
        subCategory: 'Chelsea Boots',
        sizes: ['S', 'M', 'L'],
        date: 25112024,
        bestSeller: true,
    },
    {
        _id: 'a3',
        name: 'Shoe Three',
        description: 'A shoe made from leather',
        price: 180,
        image: [Hero3],
        category: 'Monk Straps',
        subCategory: 'Chelsea Boots',
        sizes: ['S', 'M', 'L'],
        date: 25112024,
        bestSeller: false,
    },
    {
        _id: 'a4',
        name: 'Shoe Four',
        description: 'A shoe made from leather',
        price: 160,
        image: [Hero4],
        category: 'Loafers',
        subCategory: 'Chelsea Boots',
        sizes: ['S', 'M', 'L'],
        date: 25112024,
        bestSeller: false,
    },
    {
        _id: 'a5',
        name: 'Shoe Five',
        description: 'A shoe made from leather',
        price: 140,
        image: [Hero1],
        category: 'Boots',
        subCategory: 'Chelsea Boots',
        sizes: ['S', 'M', 'L'],
        date: 25112024,
        bestSeller: true,
    },
    {
        _id: 'a6',
        name: 'Shoe Six',
        description: 'A shoe made from leather',
        price: 190,
        image: [Hero2],
        category: 'Oxford',
        subCategory: 'Chelsea Boots',
        sizes: ['S', 'M', 'L'],
        date: 25112024,
        bestSeller: true,
    },
    {
        _id: 'a7',
        name: 'Shoe Seven',
        description: 'A shoe made from leather',
        price: 170,
        image: [Hero3],
        category: 'Derbies',
        subCategory: 'Chelsea Boots',
        sizes: ['S', 'M', 'L'],
        date: 25112024,
        bestSeller: false,
    },
    {
        _id: 'a8',
        name: 'Shoe Eight',
        description: 'A shoe made from leather',
        price: 130,
        image: [Hero4],
        category: 'Loafers',
        subCategory: 'Chelsea Boots',
        sizes: ['S', 'M', 'L'],
        date: 25112024,
        bestSeller: false,
    },
    {
        _id: 'a9',
        name: 'Shoe Nine',
        description: 'A shoe made from leather',
        price: 110,
        image: [Hero1],
        category: 'Monk Straps',
        subCategory: 'Chelsea Boots',
        sizes: ['S', 'M', 'L'],
        date: 25112024,
        bestSeller: true,
    },
    {
        _id: 'a10',
        name: 'Shoe Ten',
        description: 'A shoe made from leather',
        price: 100,
        image: [Hero2],
        category: 'Boots',
        subCategory: 'Chelsea Boots',
        sizes: ['S', 'M', 'L'],
        date: 25112024,
        bestSeller: false,
    },
    {
        _id: 'a11',
        name: 'Wallet',
        description: 'A wallet made from leather',
        price: 50,
        image: [Wallet1],
        accessories: 'Wallets',
        subCategory: 'Chelsea Wallets',
        sizes: ['S', 'M', 'L'],
        date: 25112024,
        bestSeller: true,
    },
    {
        _id: 'a12',
        name: 'Wallet Two',
        description: 'A wallet made from leather',
        price: 40,
        image: [Wallet2],
        accessories: 'Wallets',
        subCategory: 'Chelsea Wallets',
        sizes: ['S', 'M', 'L'],
        date: 25112024,
        bestSeller: false,
    },
    {
        _id: 'a13',
        name: 'Wallet Three',
        description: 'A wallet made from leather',
        price: 60,
        image: [Wallet3],
        accessories: 'Wallets',
        subCategory: 'Chelsea Wallets',
        sizes: ['S', 'M', 'L'],
        date: 25112024,
        bestSeller: true,
    },
    {
        _id: 'a14',
        name: 'Leather Belt',
        description: 'A leather belt',
        price: 30,
        image: [LeatheBelt1],
        accessories: 'Belts',
        subCategory: 'Chelsea Leather Belt',
        sizes: ['S', 'M', 'L'],
        date: 25112024,
        bestSeller: false,
    },
    {
        _id: 'a15',
        name: 'Leather Belt Two',
        description: 'A leather belt',
        price: 25,
        image: [LeatheBelt2],
        accessories: 'Belts',
        subCategory: 'Chelsea Leather Belt',
        sizes: ['S', 'M', 'L'],
        date: 25112024,
        bestSeller: true,
    },
    {
        _id: 'a16',
        name: 'Leather Belt Three',
        description: 'A leather belt',
        price: 35,
        image: [LeatheBelt3],
        accessories: 'Belts',
        subCategory: 'Chelsea Leather Belt',
        sizes: ['S', 'M', 'L'],
        date: 25112024,
        bestSeller: true,
    },
    {
        _id: 'a17',
        name: 'Shoe Care',
        description: 'A watch made from leather',
        price: 100,
        image: [shoeCare1],
        accessories: 'Shoe Care Products',
        subCategory: 'Chelsea Watches',
        sizes: ['S', 'M', 'L'],
        date: 25112024,
        bestSeller: true,
    },
    {
        _id: 'a18',
        name: 'Shoe Care Two',
        description: 'A watch made from leather',
        price: 80,
        image: [shoeCare2],
        accessories: 'Shoe Care Products',
        subCategory: 'Chelsea Watches',
        sizes: ['S', 'M', 'L'],
        date: 25112024,
        bestSeller: false,
    },
    {
        _id: 'a19',
        name: 'Shoe Care Three',
        description: 'A watch made from leather',
        price: 120,
        image: [shoeCare3],
        accessories: 'Shoe Care Products',
        subCategory: 'Chelsea Watches',
        sizes: ['S', 'M', 'L'],
        date: 25112024,
        bestSeller: true,
    }
]