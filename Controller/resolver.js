import COURSE from "../Schema/courseSchema.js";
const resolvers = {
  Query: {
    data: async () => {
      const data = await COURSE.find().sort({ _id: -1 })

      return data;
    },
    course: async (parent, args) => {
      const id = args.id;
      const data = await COURSE.findById(id);
      return data;
    },
  },

  Mutation: {
    courseData: async (parent, args) => {
      const input = args.input;

      console.log(input);
      const data = await COURSE.create(input);
      await data.save();
      return data;
    },
    editCourseData: async (parent, args) => {
      const id = args.id;
      const input = args.input;
      const data = await COURSE.findByIdAndUpdate(id, input, { new: true });
      await data.save();
      console.log(data)
      return data;
    },
    deleteData: async (parent, args) => {
      const id = args.id;
      await COURSE.findByIdAndDelete(id);
      return null;
    },
  },
};

export default resolvers;
