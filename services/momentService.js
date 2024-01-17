const Moment = require('../models/moment');
const { ObjectId } = require('mongodb');
const path = require('path');
class MomentService {
    async addMoment(req, res) {
        try {
            const { title, comment, tags, createdBy } = req.body;
            const newMoment = new Moment({
                title,
                comment,
                tags,
                imageUrl: req.file.path,
                createdBy: createdBy
            });
            return await newMoment.save()
                .then((res) => {
                    return { message: `Moment Created successfully`, statusCode: 200 }
                }).catch((e) => {
                    return { error: e.message, statusCode: 500 }
                })
        } catch (error) {
            console.error('Error adding moment:', error);
            return { error: 'Error adding moment', statusCode: 500 };
        }
    }
    async listMoments(userId) {
        try {
        //   const uloadesImgRootPath = path.join(__dirname, '/'); 
          
          const moments = await Moment.aggregate([
            { $match: { createdBy: new ObjectId(userId) } },
            {
              $project: {
                _id: 1,
                title: 1,
                comment: 1,
                tags: 1,
                createdBy: 1,
                imageUrl:1
                // imageUrl: { $concat: [uloadesImgRootPath, '$imageUrl'] },
              },
            },
          ]);
      
        //   console.log('uloadesImgRootPath', uloadesImgRootPath);
        //   console.log('moments', moments);
          return moments;
        } catch (error) {
          console.error('Error listing moments:', error);
          return { error: 'Error listing moments', statusCode: 500 };
        }
      }
      
    
}

module.exports = new MomentService();
