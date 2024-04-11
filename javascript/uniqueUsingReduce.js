const roadmaps = ['JavaScript', 'React', 'Node.js', 'Node.js', 'JavaScript'];
const uniqueRoadmaps = roadmaps.reduce((unique, roadmap) => {
  return unique.includes(roadmap) ? unique : [...unique, roadmap];
}, []);
console.log(uniqueRoadmaps); // ['JavaScript', 'React', 'Node.js']