const router = require('express').Router();
const { Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.put('/:id', withAuth, async(req, res) => {
    try {
      const postData = await Post.update(
        {
            ...req.body,
        //   user_id: req.body.user_id
          user_id: req.session.user_id,
          id: req.params.id
        },
        // {
        //   where: {
        //     id: req.params.id,
        //   }
        // }
        );
  
        if (!postData) {
          res.status(404).json({ message: 'No post found with this id!' });
          return;
        }
          res.status(200).json(postData);
        } catch (err) {
          res.status(500).json(err);
        }  
      });

      module.exports = router;
