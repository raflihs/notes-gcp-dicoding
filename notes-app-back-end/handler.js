const { nanoid } = require("nanoid");
const notes = require("./notes.js");

const addNoteHandler = (request, h) => {
  const { title, tags, body } = request.payload;

  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  newNote = {
    title,
    tags,
    id,
    body,
    createdAt,
    updatedAt,
  };

  notes.push(newNote);

  const isSuccess = notes.filter((notes) => notes.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: "success",
      message: "Catatan berhasil ditambahkan",
      data: {
        notedId: id,
      },
    });

    response.code(201);
    return response;
  }

  const response = h.response({
    status: "fail",
    message: "Catatan gagal ditambahkan",
  });
  response.code(500);
  return response;
};

const getAllNotesHandler = () => ({
  status: "success",
  data: {
    notes,
  },
});

const getNotesByIdHandler = (request, h) => {
  const { id } = request.params;

  const note = notes.filter((n) => n.id === id)[0];
  if (note !== undefined) {
    return {
      status: "success",
      data: {
        notes,
      },
    };
  }

  const response = h.response({
    status: "fail",
    message: "Catatan tidak ditemukan",
  });

  response.code(404);
  return response;
};

const editNoteByHandler = (request, h) => {
  const { id } = request.params;

  const { title, tags, body } = request.payload;
  const updatedAt = new Date().toISOString();

  const indeks = notes.findIndex((note) => note.id === id);

  if (indeks !== -1) {
    notes[indeks] = {
      ...notes[indeks],
      title,
      tags,
      body,
      updatedAt,
    };

    const response = h.response({
      status: "success",
      message: "Catatan berhasil diperbarui",
    });

    response.code(200);
    return response;
  }

  const response = h.response({
    status: "fail",
    message: "Gagal memperbarui catatan. Id tidak ditemukan",
  });

  response.code(404);
  return response;
};

const deleteNotesHandler = (request, h) => {
  const { id } = request.params;

  const index = notes.findIndex((n) => n.id === id);

  if (index !== -1) {
    notes.splice(index, 1);
    const response = h.response({
      status: "success",
      message: "Catatan berhasil dihapus",
    });

    response.code(200);
    return response;
  }

  const response = h.response({
    status: "fail",
    message: "Catatan gagal dihapus",
  });
  response.code(404);
  return response;
};
module.exports = {
  addNoteHandler,
  getAllNotesHandler,
  getNotesByIdHandler,
  editNoteByHandler,
  deleteNotesHandler,
};
