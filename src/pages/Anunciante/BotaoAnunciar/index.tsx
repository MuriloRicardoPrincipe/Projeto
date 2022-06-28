import Modal from 'react-bootstrap/Modal';
import Camera from '../../../assets/Imagens/iconespng/Camera.png'
import { useState } from 'react';
import Style from './Modal.module.scss';

export default function BotaoAnunciar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div>
                <button className={Style.botao__anuciar}
                    onClick={handleShow}
                >Deseja Anunciar</button><>
                    <Modal 
                    size="xl"
                    show={show}
                    onHide={handleClose}>
                        <Modal.Header closeButton>
                            <h2 className={Style.Titulo}>O que esta anunciando?</h2>
                        </Modal.Header>
                        <Modal.Body>
                            <form action="">
                                <div className={Style.ConteinerFormulario}>
                                    <input className={Style.InputFormulario} type="text" placeholder="Nome" />
                                    <input className={Style.InputFormulario} type="text" placeholder="Telefone" />
                                </div>
                                <div className={Style.ConteinerFormulario}>
                                    <input className={Style.InputFormulario} type="text" placeholder="Cidade" />
                                    <select  name="Categoria" id="" className={Style.SelectFormulario}>
                                        <option value="Diversos">Diversos</option>
                                        <option value="Eletrônico">Eletrônico</option>
                                        <option value="Esporte">Esporte</option>
                                        <option value="Residência">Residência</option>
                                        <option value="Veiculo">Veiculo</option>
                                    </select>
                                </div>
                                <div className={Style.ConteinerFormulario}>
                                    <textarea className={Style.TextFormulario} name="Descricao" placeholder="Descricao"></textarea>
                                </div>
                                <div className={Style.ConteinerFormulario}>
                                    <input
                                     className={Style.InputFormulario}
                                     type="text"
                                     
                                     placeholder="Preço(R$)"/>
                                    <div className={Style.Conteiner}>
                                        <h4 className={Style.H4Formulario}>fotos*</h4>
                                        <label className={Style.LabelFormulario} htmlFor="">adicione até 6 fotos</label>
                                    </div>  
                                    <button className={Style.addFotos} onClick={handleClose} ><img src={Camera} alt="" /> Adicione Fotos</button>                                  
                                </div>
                                <div>
                                    <button className={Style.botaoEnviar} onClick={handleClose} >Enviar para avaliação</button>
                                </div>
                            </form>
                        </Modal.Body>
                    </Modal>
                </>
            </div>
        </>
    );
}