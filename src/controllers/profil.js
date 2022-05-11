const { user, profil } = require("../../models");


exports.getProfils = async (req, res) => {
    try {
      const idUser = req.user.id;
  
      let data = await profil.findOne({
        where: {
          idUser,
        },
        attributes: {
          exclude: ["createdAt", "updatedAt", "idUser"],
        },
      });
  
      data = JSON.parse(JSON.stringify(data));
  
      data = {
        ...data,
        // image: data.image ? process.env.PATH_FILE + data.image : null,
      };
  
      res.send({
        status: "success...",
        data,
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: "failed",
        message: "Server Error",
      });
    }
  }

    
  

// exports.getProfil = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const data = await profil.findOne({
//       where: {
//         id,
//       },
//       attributes: {
//         exclude: ["password", "createdAt", "updatedAt"],
//       },
//     });

//     res.send({
//       status: "success",
//       data: {
//         profil : data,
//       },
//     });
//   } catch (error) {
//     console.log(error);
//     res.send({
//       status: "failed",
//       message: "Server Error",
//     });
//   }
// };

// exports.updateProfil = async (req, res) => {
//   try {
//     const { id } = req.params;

//     await profil.update(req.body, {
//       where: {
//         id,
//       },
//     });

//     res.send({
//       status: "success",
//       message: `Update profil id: ${id} finished`,
//       data: req.body,
//     });
//   } catch (error) {
//     console.log(error);
//     res.send({
//       status: "failed",
//       message: "Server Error",
//     });
//   }
// };

// exports.deleteProfil = async (req, res) => {
//   try {
//     const { id } = req.params;

//     await profil.destroy({
//       where: {
//         id,
//       },
//     });

//     res.send({
//       status: "success",
//       message: `Delete profil id: ${id} finished`,
//     });
//   } catch (error) {
//     console.log(error);
//     res.send({
//       status: "failed",
//       message: "Server Error",
//     });
//   }
// };
