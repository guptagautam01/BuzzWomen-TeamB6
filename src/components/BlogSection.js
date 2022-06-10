// import React from 'react'
// import { Typography, Card, CardMedia, CardContent, Stack } from '@mui/material';

// const BlogSection = () => {

//     const cakes = [
//         { name: "Women1", image: "https://images.unsplash.com/photo-1536705284215-000a0c2f0406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" },
//         { name: "Women2", image: "https://images.unsplash.com/photo-1536705284215-000a0c2f0406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" },
//         { name: "Women3", image: "https://images.unsplash.com/photo-1536705284215-000a0c2f0406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" },
//     ]

//     return (
//         <>
//             <Typography variant="h3" align='center' mt={15} mb={6} ml={4} color="primary" fontFamily={'Black Han Sans'}>Success Story of many like Yourself </Typography>
//             <Stack direction="row" justifyContent="space-evenly" sx={{ flexWrap: "wrap" }}>
//                 {
//                     cakes.map(cake => {
//                         return (
//                             <Card sx={{ maxWidth: "300px", mb: 1 }}>
//                                 <CardMedia
//                                     component="img"
//                                     height="200"
//                                     image={cake.image}
//                                     alt="Come back later"
//                                 />
//                                 <CardContent>
//                                     <Typography variant="h6" style={{}}>
//                                         {cake.name}
//                                     </Typography>
//                                 </CardContent>
//                             </Card>
//                         )
//                     })
//                 }
//             </Stack>
//         </>
//     )
// }

// export default BlogSection