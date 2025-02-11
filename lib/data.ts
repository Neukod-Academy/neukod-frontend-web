export interface Product {
    id: string
    name: string
    status: "Active" | "Draft" | "Archived"
    price: number
    totalSales: number
    createdAt: string
    image: string
  }
  
  export const products: Product[] = [
    {
      id: "1",
      name: "Smartphone X Pro",
      status: "Active",
      price: 999.0,
      totalSales: 150,
      createdAt: "6/23/2024",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: "2",
      name: "Wireless Earbuds Ultra",
      status: "Active",
      price: 199.0,
      totalSales: 300,
      createdAt: "6/23/2024",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: "3",
      name: "Smart Home Hub",
      status: "Active",
      price: 149.0,
      totalSales: 200,
      createdAt: "6/23/2024",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: "4",
      name: "4K Ultra HD Smart TV",
      status: "Active",
      price: 799.0,
      totalSales: 50,
      createdAt: "6/23/2024",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: "5",
      name: "Gaming Laptop Pro",
      status: "Active",
      price: 1299.0,
      totalSales: 75,
      createdAt: "6/23/2024",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: "6",
      name: "Smartwatch Elite",
      status: "Draft",
      price: 299.0,
      totalSales: 0,
      createdAt: "6/23/2024",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: "7",
      name: "Tablet Pro Max",
      status: "Archived",
      price: 699.0,
      totalSales: 125,
      createdAt: "6/23/2024",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: "8",
      name: "Wireless Charging Pad",
      status: "Active",
      price: 49.0,
      totalSales: 450,
      createdAt: "6/23/2024",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: "9",
      name: "Noise-Canceling Headphones",
      status: "Active",
      price: 249.0,
      totalSales: 280,
      createdAt: "6/23/2024",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: "10",
      name: "Portable Power Bank",
      status: "Active",
      price: 79.0,
      totalSales: 600,
      createdAt: "6/23/2024",
      image: "/placeholder.svg?height=50&width=50",
    },
  ]
  
  