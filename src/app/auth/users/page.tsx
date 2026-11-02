'use client';
import React, { useEffect, useState } from 'react';
import { Button, Select } from 'antd';
import { Input } from 'antd';
import { Modal } from 'antd';
import {
  Edit,
  Funnel,
  RefreshCw,
  Search,
  UserRoundCheck,
  UserRoundPlus,
  UserRoundX,
} from 'lucide-react';
import { Roles, Users } from '@/app/models/dictionary';
import {
  createUser,
  getAllRoles,
  getAllUsers,
  updateUser,
} from '@/app/api/users';
import { Controller, useForm } from 'react-hook-form';

export default function page() {
  const [modalCreate, setmodalCreate] = useState<boolean>(false);
  const [modalUpdate, setmodalUpdate] = useState<boolean>(false);
  const [listClients, setlistClients] = useState<Array<Users>>([]);
  const [listRoles, setlistRoles] = useState<Array<Roles>>([]);

  const {
    register,
    handleSubmit,
    getValues,
    setValues,
    formState: { errors, isSubmitted, touchedFields },
    control,
  } = useForm<Users>({
    defaultValues: {
      username: undefined,
      grado: undefined,
      nombre: undefined,
      active: true,
      rolId: undefined,
      password: undefined,
    },
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });

  const handleGetAllUsers = async () => {
    try {
      const response = await getAllUsers();
      console.log('response users', response);
      setlistClients(response);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleGetAllRoles = async () => {
    try {
      const response = await getAllRoles();
      console.log('response roles', response);
      setlistRoles(response);
    } catch (error) {
      console.error('Error fetching roles:', error);
    }
  };

  const handleCreateUser = async () => {
    console.log(getValues);
    try {
      const { username, nombre, grado, rolId, password } = getValues();
      const dataUserCreate: Users = {
        username: username,
        nombre: nombre,
        grado: grado,
        rolId: rolId,
        password: password,
      };
      const response = await createUser(dataUserCreate);
      console.log('response create user', response);
      setlistClients([...listClients, response]);
      setmodalCreate(false);
      setValues({
        username: '',
        nombre: '',
        rolId: '',
        password: '',
        grado: '',
      });
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const handleSetDataUser = (userData: Users) => {
    setValues({
      username: userData.username,
      nombre: userData.nombre,
      grado: userData.grado,
      rolId: userData.rolId,
      uuid: userData.uuid,
    });
    setmodalUpdate(true);
  };

  const handleChangeStatus = () => {};

  const handleUpdateUser = async () => {
    try {
      const { username, nombre, grado, rolId, uuid } = getValues();

      const updateDataUser = {
        username: username,
        nombre: nombre,
        grado: grado,
        rol: rolId ? rolId : '',
      };
      const idUser = uuid ? uuid : '';

      const responseUpdateUser = await updateUser(updateDataUser, idUser);
      console.log(responseUpdateUser);
      setValues({
        username: '',
        nombre: '',
        rolId: '',
        grado: '',
        uuid,
      });
      setmodalUpdate(false);
      handleGetAllUsers();
    } catch (err) {
      console.error('Error updating user', err);
    }
  };

  const handleRefreshUsers = async () => {
    try {
      const response = await getAllUsers();
      setlistClients(response);
    } catch (error) {
      console.error('Error refreshing users:', error);
    }
  };

  const handleShowModalCreate = () => {
    setValues({
      username: '',
      nombre: '',
      rolId: '',
      password: '',
      grado: '',
    });
    setmodalCreate(!modalCreate);
  };

  const handleShowModalUpdate = () => {
    setmodalUpdate(!modalUpdate);
  };

  useEffect(() => {
    handleGetAllUsers();
    handleGetAllRoles();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="grow">
          <Input placeholder="Buscar..." />
        </div>
        <div>
          <div className="tooltip" data-tip="Buscar">
            <Button type="text" icon={<Search />}></Button>
          </div>
          <div className="tooltip" data-tip="Crear Usuario">
            <Button
              onClick={() => handleShowModalCreate()}
              type="text"
              icon={<UserRoundPlus />}
            ></Button>
          </div>
          <div className="tooltip" data-tip="Filtrar">
            <Button type="text" icon={<Funnel />}></Button>
          </div>
          <div className="tooltip" data-tip="Actualizar">
            <Button
              type="text"
              icon={<RefreshCw />}
              onClick={() => handleRefreshUsers()}
            ></Button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto mt-16">
        <table className="table">
          <thead>
            <tr className="text-black">
              <th>No.</th>
              <th>Grado</th>
              <th>Nombre</th>
              <th>Usuario</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {listClients &&
              listClients.map((user, index) => (
                <tr key={user.username} className="text-black">
                  <td>{index + 1}</td>
                  <td>{user.grado}</td>
                  <td>{user.nombre}</td>
                  <td>{user.username}</td>
                  <td>{user.role}</td>
                  <td>
                    {user.active ? (
                      <div className="badge badge-soft bg-green-100 badge-success p-1">
                        Activo
                      </div>
                    ) : (
                      <div className="badge badge-soft bg-red-100 badge-error p-1">
                        Inactivo
                      </div>
                    )}
                  </td>
                  <td>
                    <div className="tooltip" data-tip="Editar">
                      <Button
                        type="text"
                        icon={<Edit />}
                        onClick={() => handleSetDataUser(user)}
                      />
                    </div>
                    {user.active ? (
                      <div className="tooltip" data-tip="Desactivar">
                        <Button type="text" icon={<UserRoundX />} />
                      </div>
                    ) : (
                      <div className="tooltip" data-tip="Activar">
                        <Button type="text" icon={<UserRoundCheck />} />
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            {listClients.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center text-black">
                  {' '}
                  No hay usuarios disponibles
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* modal update data user */}
      <Modal
        title="Actualizar Datos"
        open={modalUpdate}
        onCancel={() => handleShowModalUpdate()}
        // onOk={() => handleCreateUser()}
        okText="Actualizar Usuario"
        cancelText="Cerrar"
        mask={{
          closable: false,
          blur: true,
        }}
        confirmLoading={false}
        styles={{
          container: {
            width: '710px',
          },
          footer: {
            marginTop: '20px',
          },
        }}
        okButtonProps={{ htmlType: 'submit', form: 'update-user-form' }}
      >
        <form id="update-user-form" onSubmit={handleSubmit(handleUpdateUser)}>
          <div className="w-[650px]">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Controller
                  name="grado"
                  control={control}
                  rules={{
                    required: 'El campo grado es requerido',
                  }}
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <Input
                        placeholder="Grado"
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        status={error ? 'error' : ''}
                      />
                      <span className=" text-xs text-red-300">
                        {error && error.message}
                      </span>
                    </>
                  )}
                ></Controller>
              </div>
              <div>
                <Controller
                  name="nombre"
                  control={control}
                  rules={{
                    required: 'El campo nombre es requerido',
                  }}
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <Input
                        placeholder="Nombre"
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        status={error ? 'error' : ''}
                      />
                      <span className=" text-xs text-red-300">
                        {error && error.message}
                      </span>
                    </>
                  )}
                ></Controller>
              </div>
              <div>
                {/* <Input
                  placeholder="Usuario"
                  {...register('username', {
                    required: 'El usuario es requerido',
                    validate: (value) =>
                      value.trim().length > 0 ||
                      'El campo usuario no debe contener espacios en blanco',
                    // setValueAs: (value) => value.trim(),
                  })}
                  status={errors.username ? 'error' : ''}
                /> */}
                <Controller
                  name="username"
                  control={control}
                  rules={{
                    required: 'El campo username es requerido',
                  }}
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <Input
                        placeholder="Username"
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        status={error ? 'error' : ''}
                      />
                      <span className=" text-xs text-red-300">
                        {error && error.message}
                      </span>
                    </>
                  )}
                ></Controller>
              </div>
              <div>
                <Controller
                  name="rolId"
                  control={control}
                  rules={{ required: 'El rol es requerido' }}
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <Select
                        placeholder="Seleccionar Rol"
                        style={{ width: '100%' }}
                        // onChange={handleChange}
                        options={listRoles.map((role) => ({
                          value: role.uuid,
                          label: role.nameRol,
                        }))}
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        status={error ? 'error' : ''}
                      />
                      <span className="text-xs text-red-300">
                        {error && error.message}
                      </span>
                    </>
                  )}
                ></Controller>
              </div>
            </div>
          </div>
        </form>
      </Modal>

      {/* modal create user */}
      <Modal
        title="Crear Usuario"
        open={modalCreate}
        onCancel={() => handleShowModalCreate()}
        // onOk={() => handleCreateUser()}
        okText="Crear Usuario"
        cancelText="Cerrar"
        mask={{
          closable: false,
          blur: true,
        }}
        confirmLoading={false}
        styles={{
          container: {
            width: '710px',
          },
          footer: {
            marginTop: '20px',
          },
        }}
        okButtonProps={{ htmlType: 'submit', form: 'create-user-form' }}
      >
        <form id="create-user-form" onSubmit={handleSubmit(handleCreateUser)}>
          <div className="w-[650px]">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Controller
                  name="grado"
                  control={control}
                  rules={{
                    required: 'El campo grado es requerido',
                  }}
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <Input
                        placeholder="Grado"
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        status={error ? 'error' : ''}
                      />
                      <span className=" text-xs text-red-300">
                        {error && error.message}
                      </span>
                    </>
                  )}
                ></Controller>
              </div>
              <div>
                <Controller
                  name="nombre"
                  control={control}
                  rules={{
                    required: 'El campo nombre es requerido',
                  }}
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <Input
                        placeholder="Nombre"
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        status={error ? 'error' : ''}
                      />
                      <span className=" text-xs text-red-300">
                        {error && error.message}
                      </span>
                    </>
                  )}
                ></Controller>
              </div>
              <div>
                {/* <Input
                  placeholder="Usuario"
                  {...register('username', {
                    required: 'El usuario es requerido',
                    validate: (value) =>
                      value.trim().length > 0 ||
                      'El campo usuario no debe contener espacios en blanco',
                    // setValueAs: (value) => value.trim(),
                  })}
                  status={errors.username ? 'error' : ''}
                /> */}
                <Controller
                  name="username"
                  control={control}
                  rules={{
                    required: 'El campo username es requerido',
                  }}
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <Input
                        placeholder="Username"
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        status={error ? 'error' : ''}
                      />
                      <span className=" text-xs text-red-300">
                        {error && error.message}
                      </span>
                    </>
                  )}
                ></Controller>
              </div>
              <div>
                <Controller
                  name="rolId"
                  control={control}
                  rules={{ required: 'El rol es requerido' }}
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <Select
                        placeholder="Seleccionar Rol"
                        style={{ width: '100%' }}
                        // onChange={handleChange}
                        options={listRoles.map((role) => ({
                          value: role.uuid,
                          label: role.nameRol,
                        }))}
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        status={error ? 'error' : ''}
                      />
                      <span className="text-xs text-red-300">
                        {error && error.message}
                      </span>
                    </>
                  )}
                ></Controller>
              </div>
              <div>
                <Controller
                  name="password"
                  control={control}
                  rules={{
                    required: 'La contraseña es requerida',
                    minLength: {
                      value: 8,
                      message: 'La contraseña debe tener al menos 8 caracteres',
                    },
                  }}
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <Input
                        type={'password'}
                        placeholder="Password"
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        status={error ? 'error' : ''}
                      />
                      <span className=" text-xs text-red-300">
                        {error && error.message}
                      </span>
                    </>
                  )}
                ></Controller>
                <span className="text-xs text-gray-400/60 ml-1 mt-1">
                  Min 8 caracteres
                </span>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}
