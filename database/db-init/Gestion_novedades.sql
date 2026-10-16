--
-- PostgreSQL database dump
--

\restrict i53cXvrV7YSUneKvHkulEA9lLsoTmpUUagfnIStc5RC4panOFrjrBFfA6w9fybd

-- Dumped from database version 18.0
-- Dumped by pg_dump version 18.0

-- Started on 2026-10-15 19:12:36

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 223 (class 1259 OID 99274)
-- Name: ambientes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ambientes (
    id_ambiente character varying(20) NOT NULL,
    id_sede integer
);


ALTER TABLE public.ambientes OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 99316)
-- Name: aprendices; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.aprendices (
    identi_user character varying(20) NOT NULL,
    id_ficha character varying(10) NOT NULL
);


ALTER TABLE public.aprendices OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 99345)
-- Name: areas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.areas (
    id_area integer NOT NULL,
    nom_area character varying(100) NOT NULL
);


ALTER TABLE public.areas OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 99230)
-- Name: ciudades; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ciudades (
    id_ciudad character varying(5) NOT NULL,
    nombre_ciudad character varying(50) NOT NULL
);


ALTER TABLE public.ciudades OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 99369)
-- Name: competencias; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.competencias (
    id_competencia character varying(10) CONSTRAINT competencia_id_competencia_not_null NOT NULL,
    nom_competencia character varying(100) CONSTRAINT competencia_nom_competencia_not_null NOT NULL
);


ALTER TABLE public.competencias OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 99352)
-- Name: coordinadores; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.coordinadores (
    identi_user character varying(20) NOT NULL,
    id_area integer NOT NULL
);


ALTER TABLE public.coordinadores OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 99309)
-- Name: fichas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.fichas (
    id_ficha character varying(10) NOT NULL,
    nom_programa character varying(100) NOT NULL
);


ALTER TABLE public.fichas OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 99333)
-- Name: instructores; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.instructores (
    identi_user character varying(20) NOT NULL,
    tipo_vinculacion character varying(30) NOT NULL
);


ALTER TABLE public.instructores OWNER TO postgres;

--
-- TOC entry 230 (class 1259 OID 99556)
-- Name: instructores_fichas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.instructores_fichas (
    identi_user character varying(20) NOT NULL,
    id_ficha character varying(10) NOT NULL,
    id_competencia character varying(10) NOT NULL
);


ALTER TABLE public.instructores_fichas OWNER TO postgres;

--
-- TOC entry 232 (class 1259 OID 99599)
-- Name: novedades; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.novedades (
    id_novedad integer NOT NULL,
    id_tipo_novedad integer NOT NULL,
    usuarios character varying(30) NOT NULL,
    descripcion character varying(1000) NOT NULL,
    fecha_registro timestamp without time zone NOT NULL,
    id_estado boolean NOT NULL
);


ALTER TABLE public.novedades OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 99186)
-- Name: roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.roles (
    id_rol integer CONSTRAINT rol_id_rol_not_null NOT NULL,
    nombre_rol character varying(20) CONSTRAINT rol_nombre_rol_not_null NOT NULL
);


ALTER TABLE public.roles OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 99261)
-- Name: sedes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sedes (
    id_sede integer NOT NULL,
    nombre_sede character varying(100) NOT NULL,
    direccion character varying(50) NOT NULL,
    id_ciudad character varying(5)
);


ALTER TABLE public.sedes OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 99579)
-- Name: tipo_novedad; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tipo_novedad (
    id_tipo_novedad integer NOT NULL,
    nom_novedad character varying(50) NOT NULL
);


ALTER TABLE public.tipo_novedad OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 99209)
-- Name: usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuarios (
    identi_user character varying(20) NOT NULL,
    tipo_id_user character varying(20) NOT NULL,
    nombre1_user character varying(30) NOT NULL,
    nombre2_user character varying(30),
    apellido1_user character varying(30) NOT NULL,
    apellido2_user character varying(30),
    fecha_naci_user date NOT NULL,
    genero_user character varying(20) NOT NULL,
    correo_user character varying(200) NOT NULL,
    contrasena_user character varying(260) NOT NULL,
    estado_user boolean NOT NULL,
    id_rol integer
);


ALTER TABLE public.usuarios OWNER TO postgres;

--
-- TOC entry 5052 (class 0 OID 99274)
-- Dependencies: 223
-- Data for Name: ambientes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ambientes (id_ambiente, id_sede) FROM stdin;
\.


--
-- TOC entry 5054 (class 0 OID 99316)
-- Dependencies: 225
-- Data for Name: aprendices; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.aprendices (identi_user, id_ficha) FROM stdin;
\.


--
-- TOC entry 5056 (class 0 OID 99345)
-- Dependencies: 227
-- Data for Name: areas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.areas (id_area, nom_area) FROM stdin;
\.


--
-- TOC entry 5050 (class 0 OID 99230)
-- Dependencies: 221
-- Data for Name: ciudades; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ciudades (id_ciudad, nombre_ciudad) FROM stdin;
\.


--
-- TOC entry 5058 (class 0 OID 99369)
-- Dependencies: 229
-- Data for Name: competencias; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.competencias (id_competencia, nom_competencia) FROM stdin;
\.


--
-- TOC entry 5057 (class 0 OID 99352)
-- Dependencies: 228
-- Data for Name: coordinadores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.coordinadores (identi_user, id_area) FROM stdin;
\.


--
-- TOC entry 5053 (class 0 OID 99309)
-- Dependencies: 224
-- Data for Name: fichas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.fichas (id_ficha, nom_programa) FROM stdin;
\.


--
-- TOC entry 5055 (class 0 OID 99333)
-- Dependencies: 226
-- Data for Name: instructores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.instructores (identi_user, tipo_vinculacion) FROM stdin;
\.


--
-- TOC entry 5059 (class 0 OID 99556)
-- Dependencies: 230
-- Data for Name: instructores_fichas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.instructores_fichas (identi_user, id_ficha, id_competencia) FROM stdin;
\.


--
-- TOC entry 5061 (class 0 OID 99599)
-- Dependencies: 232
-- Data for Name: novedades; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.novedades (id_novedad, id_tipo_novedad, usuarios, descripcion, fecha_registro, id_estado) FROM stdin;
\.


--
-- TOC entry 5048 (class 0 OID 99186)
-- Dependencies: 219
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.roles (id_rol, nombre_rol) FROM stdin;
\.


--
-- TOC entry 5051 (class 0 OID 99261)
-- Dependencies: 222
-- Data for Name: sedes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sedes (id_sede, nombre_sede, direccion, id_ciudad) FROM stdin;
\.


--
-- TOC entry 5060 (class 0 OID 99579)
-- Dependencies: 231
-- Data for Name: tipo_novedad; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tipo_novedad (id_tipo_novedad, nom_novedad) FROM stdin;
\.


--
-- TOC entry 5049 (class 0 OID 99209)
-- Dependencies: 220
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuarios (identi_user, tipo_id_user, nombre1_user, nombre2_user, apellido1_user, apellido2_user, fecha_naci_user, genero_user, correo_user, contrasena_user, estado_user, id_rol) FROM stdin;
\.


--
-- TOC entry 4869 (class 2606 OID 99279)
-- Name: ambientes ambientes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ambientes
    ADD CONSTRAINT ambientes_pkey PRIMARY KEY (id_ambiente);


--
-- TOC entry 4877 (class 2606 OID 99351)
-- Name: areas areas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.areas
    ADD CONSTRAINT areas_pkey PRIMARY KEY (id_area);


--
-- TOC entry 4865 (class 2606 OID 99236)
-- Name: ciudades ciudades_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ciudades
    ADD CONSTRAINT ciudades_pkey PRIMARY KEY (id_ciudad);


--
-- TOC entry 4881 (class 2606 OID 99375)
-- Name: competencias competencia_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.competencias
    ADD CONSTRAINT competencia_pkey PRIMARY KEY (id_competencia);


--
-- TOC entry 4871 (class 2606 OID 99315)
-- Name: fichas fichas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.fichas
    ADD CONSTRAINT fichas_pkey PRIMARY KEY (id_ficha);


--
-- TOC entry 4887 (class 2606 OID 99611)
-- Name: novedades novedades_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.novedades
    ADD CONSTRAINT novedades_pkey PRIMARY KEY (id_novedad);


--
-- TOC entry 4873 (class 2606 OID 99322)
-- Name: aprendices pk_aprendices; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.aprendices
    ADD CONSTRAINT pk_aprendices PRIMARY KEY (identi_user);


--
-- TOC entry 4879 (class 2606 OID 99358)
-- Name: coordinadores pk_coordinadores; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.coordinadores
    ADD CONSTRAINT pk_coordinadores PRIMARY KEY (identi_user);


--
-- TOC entry 4875 (class 2606 OID 99339)
-- Name: instructores pk_instructores; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instructores
    ADD CONSTRAINT pk_instructores PRIMARY KEY (identi_user);


--
-- TOC entry 4883 (class 2606 OID 99563)
-- Name: instructores_fichas pk_instructores_fichas; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instructores_fichas
    ADD CONSTRAINT pk_instructores_fichas PRIMARY KEY (identi_user, id_ficha, id_competencia);


--
-- TOC entry 4861 (class 2606 OID 99192)
-- Name: roles rol_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT rol_pkey PRIMARY KEY (id_rol);


--
-- TOC entry 4867 (class 2606 OID 99268)
-- Name: sedes sedes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sedes
    ADD CONSTRAINT sedes_pkey PRIMARY KEY (id_sede);


--
-- TOC entry 4885 (class 2606 OID 99585)
-- Name: tipo_novedad tipo_novedad_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipo_novedad
    ADD CONSTRAINT tipo_novedad_pkey PRIMARY KEY (id_tipo_novedad);


--
-- TOC entry 4863 (class 2606 OID 99224)
-- Name: usuarios usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (identi_user);


--
-- TOC entry 4890 (class 2606 OID 99280)
-- Name: ambientes ambientes_id_sede_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ambientes
    ADD CONSTRAINT ambientes_id_sede_fkey FOREIGN KEY (id_sede) REFERENCES public.sedes(id_sede);


--
-- TOC entry 4891 (class 2606 OID 99328)
-- Name: aprendices fk_aprendices_fichas; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.aprendices
    ADD CONSTRAINT fk_aprendices_fichas FOREIGN KEY (id_ficha) REFERENCES public.fichas(id_ficha);


--
-- TOC entry 4892 (class 2606 OID 99323)
-- Name: aprendices fk_aprendices_usuarios; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.aprendices
    ADD CONSTRAINT fk_aprendices_usuarios FOREIGN KEY (identi_user) REFERENCES public.usuarios(identi_user);


--
-- TOC entry 4894 (class 2606 OID 99364)
-- Name: coordinadores fk_coordinadores_areas; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.coordinadores
    ADD CONSTRAINT fk_coordinadores_areas FOREIGN KEY (id_area) REFERENCES public.areas(id_area);


--
-- TOC entry 4895 (class 2606 OID 99359)
-- Name: coordinadores fk_coordinadores_usuarios; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.coordinadores
    ADD CONSTRAINT fk_coordinadores_usuarios FOREIGN KEY (identi_user) REFERENCES public.usuarios(identi_user);


--
-- TOC entry 4896 (class 2606 OID 99574)
-- Name: instructores_fichas fk_id_competencias; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instructores_fichas
    ADD CONSTRAINT fk_id_competencias FOREIGN KEY (id_competencia) REFERENCES public.competencias(id_competencia);


--
-- TOC entry 4897 (class 2606 OID 99569)
-- Name: instructores_fichas fk_id_fichas; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instructores_fichas
    ADD CONSTRAINT fk_id_fichas FOREIGN KEY (id_ficha) REFERENCES public.fichas(id_ficha);


--
-- TOC entry 4898 (class 2606 OID 99564)
-- Name: instructores_fichas fk_id_instructores; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instructores_fichas
    ADD CONSTRAINT fk_id_instructores FOREIGN KEY (identi_user) REFERENCES public.instructores(identi_user);


--
-- TOC entry 4893 (class 2606 OID 99340)
-- Name: instructores fk_instructores_usuarios; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instructores
    ADD CONSTRAINT fk_instructores_usuarios FOREIGN KEY (identi_user) REFERENCES public.usuarios(identi_user);


--
-- TOC entry 4899 (class 2606 OID 99612)
-- Name: novedades fk_novedades_tipo; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.novedades
    ADD CONSTRAINT fk_novedades_tipo FOREIGN KEY (id_tipo_novedad) REFERENCES public.tipo_novedad(id_tipo_novedad);


--
-- TOC entry 4900 (class 2606 OID 99617)
-- Name: novedades fk_novedades_usuarios; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.novedades
    ADD CONSTRAINT fk_novedades_usuarios FOREIGN KEY (usuarios) REFERENCES public.usuarios(identi_user);


--
-- TOC entry 4889 (class 2606 OID 99269)
-- Name: sedes sedes_id_ciudad_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sedes
    ADD CONSTRAINT sedes_id_ciudad_fkey FOREIGN KEY (id_ciudad) REFERENCES public.ciudades(id_ciudad);


--
-- TOC entry 4888 (class 2606 OID 99225)
-- Name: usuarios usuarios_id_rol_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_id_rol_fkey FOREIGN KEY (id_rol) REFERENCES public.roles(id_rol);


-- Completed on 2026-10-15 19:12:36

--
-- PostgreSQL database dump complete
--

\unrestrict i53cXvrV7YSUneKvHkulEA9lLsoTmpUUagfnIStc5RC4panOFrjrBFfA6w9fybd

