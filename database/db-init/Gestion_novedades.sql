--
-- PostgreSQL database dump
--

\restrict GbGCbeAMdzIsLJMwWvTwBAVjQyun4FS0TWZMQMzoS5V2cuRNo74EqtbyebV4SjT

-- Dumped from database version 18.4 (Debian 18.4-1.pgdg13+1)
-- Dumped by pg_dump version 18.1

-- Started on 2026-10-15 23:58:10

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
-- TOC entry 219 (class 1259 OID 16385)
-- Name: ambientes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ambientes (
    id_ambiente character varying(20) NOT NULL,
    id_sede integer
);


ALTER TABLE public.ambientes OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16389)
-- Name: aprendices; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.aprendices (
    identi_user character varying(20) NOT NULL,
    id_ficha character varying(10) NOT NULL
);


ALTER TABLE public.aprendices OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16394)
-- Name: areas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.areas (
    id_area integer NOT NULL,
    nom_area character varying(100) NOT NULL
);


ALTER TABLE public.areas OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 16399)
-- Name: ciudades; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ciudades (
    id_ciudad character varying(5) NOT NULL,
    nombre_ciudad character varying(50) NOT NULL
);


ALTER TABLE public.ciudades OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16404)
-- Name: competencias; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.competencias (
    id_competencia character varying(10) CONSTRAINT competencia_id_competencia_not_null NOT NULL,
    nom_competencia character varying(100) CONSTRAINT competencia_nom_competencia_not_null NOT NULL
);


ALTER TABLE public.competencias OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 16409)
-- Name: coordinadores; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.coordinadores (
    identi_user character varying(20) NOT NULL,
    id_area integer NOT NULL
);


ALTER TABLE public.coordinadores OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16414)
-- Name: fichas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.fichas (
    id_ficha character varying(10) NOT NULL,
    nom_programa character varying(100) NOT NULL
);


ALTER TABLE public.fichas OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 16419)
-- Name: instructores; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.instructores (
    identi_user character varying(20) NOT NULL,
    tipo_vinculacion character varying(30) NOT NULL
);


ALTER TABLE public.instructores OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 16424)
-- Name: instructores_fichas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.instructores_fichas (
    identi_user character varying(20) NOT NULL,
    id_ficha character varying(10) NOT NULL,
    id_competencia character varying(10) NOT NULL
);


ALTER TABLE public.instructores_fichas OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 16430)
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
-- TOC entry 229 (class 1259 OID 16441)
-- Name: roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.roles (
    id_rol integer CONSTRAINT rol_id_rol_not_null NOT NULL,
    nombre_rol character varying(20) CONSTRAINT rol_nombre_rol_not_null NOT NULL
);


ALTER TABLE public.roles OWNER TO postgres;

--
-- TOC entry 230 (class 1259 OID 16446)
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
-- TOC entry 231 (class 1259 OID 16452)
-- Name: tipo_novedad; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tipo_novedad (
    id_tipo_novedad integer NOT NULL,
    nom_novedad character varying(50) NOT NULL
);


ALTER TABLE public.tipo_novedad OWNER TO postgres;

--
-- TOC entry 232 (class 1259 OID 16457)
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
-- TOC entry 3528 (class 0 OID 16385)
-- Dependencies: 219
-- Data for Name: ambientes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ambientes (id_ambiente, id_sede) FROM stdin;
\.


--
-- TOC entry 3529 (class 0 OID 16389)
-- Dependencies: 220
-- Data for Name: aprendices; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.aprendices (identi_user, id_ficha) FROM stdin;
\.


--
-- TOC entry 3530 (class 0 OID 16394)
-- Dependencies: 221
-- Data for Name: areas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.areas (id_area, nom_area) FROM stdin;
\.


--
-- TOC entry 3531 (class 0 OID 16399)
-- Dependencies: 222
-- Data for Name: ciudades; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ciudades (id_ciudad, nombre_ciudad) FROM stdin;
\.


--
-- TOC entry 3532 (class 0 OID 16404)
-- Dependencies: 223
-- Data for Name: competencias; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.competencias (id_competencia, nom_competencia) FROM stdin;
\.


--
-- TOC entry 3533 (class 0 OID 16409)
-- Dependencies: 224
-- Data for Name: coordinadores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.coordinadores (identi_user, id_area) FROM stdin;
\.


--
-- TOC entry 3534 (class 0 OID 16414)
-- Dependencies: 225
-- Data for Name: fichas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.fichas (id_ficha, nom_programa) FROM stdin;
\.


--
-- TOC entry 3535 (class 0 OID 16419)
-- Dependencies: 226
-- Data for Name: instructores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.instructores (identi_user, tipo_vinculacion) FROM stdin;
\.


--
-- TOC entry 3536 (class 0 OID 16424)
-- Dependencies: 227
-- Data for Name: instructores_fichas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.instructores_fichas (identi_user, id_ficha, id_competencia) FROM stdin;
\.


--
-- TOC entry 3537 (class 0 OID 16430)
-- Dependencies: 228
-- Data for Name: novedades; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.novedades (id_novedad, id_tipo_novedad, usuarios, descripcion, fecha_registro, id_estado) FROM stdin;
\.


--
-- TOC entry 3538 (class 0 OID 16441)
-- Dependencies: 229
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.roles (id_rol, nombre_rol) FROM stdin;
1	Aprendiz
\.


--
-- TOC entry 3539 (class 0 OID 16446)
-- Dependencies: 230
-- Data for Name: sedes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sedes (id_sede, nombre_sede, direccion, id_ciudad) FROM stdin;
\.


--
-- TOC entry 3540 (class 0 OID 16452)
-- Dependencies: 231
-- Data for Name: tipo_novedad; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tipo_novedad (id_tipo_novedad, nom_novedad) FROM stdin;
\.


--
-- TOC entry 3541 (class 0 OID 16457)
-- Dependencies: 232
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuarios (identi_user, tipo_id_user, nombre1_user, nombre2_user, apellido1_user, apellido2_user, fecha_naci_user, genero_user, correo_user, contrasena_user, estado_user, id_rol) FROM stdin;
1114545747	T.I.	Alejandro	\N	Ducuara	Satizabal	2010-10-06	M	ducuarasatizabalalejandro@gmail.com	scrypt:32768:8:1$Jm4JkrsyDi9p5P86$4ca57fed1054a29ffe227919e9da8ae9587020b9d2a1244aaae7ce41939a4288dcaa41e7c4014aed0d5e071d033a9d7c1bf7cb36bbd7497a78ab4aec5a456e3f	t	1
\.


--
-- TOC entry 3341 (class 2606 OID 16472)
-- Name: ambientes ambientes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ambientes
    ADD CONSTRAINT ambientes_pkey PRIMARY KEY (id_ambiente);


--
-- TOC entry 3345 (class 2606 OID 16474)
-- Name: areas areas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.areas
    ADD CONSTRAINT areas_pkey PRIMARY KEY (id_area);


--
-- TOC entry 3347 (class 2606 OID 16476)
-- Name: ciudades ciudades_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ciudades
    ADD CONSTRAINT ciudades_pkey PRIMARY KEY (id_ciudad);


--
-- TOC entry 3349 (class 2606 OID 16478)
-- Name: competencias competencia_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.competencias
    ADD CONSTRAINT competencia_pkey PRIMARY KEY (id_competencia);


--
-- TOC entry 3353 (class 2606 OID 16480)
-- Name: fichas fichas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.fichas
    ADD CONSTRAINT fichas_pkey PRIMARY KEY (id_ficha);


--
-- TOC entry 3359 (class 2606 OID 16482)
-- Name: novedades novedades_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.novedades
    ADD CONSTRAINT novedades_pkey PRIMARY KEY (id_novedad);


--
-- TOC entry 3343 (class 2606 OID 16484)
-- Name: aprendices pk_aprendices; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.aprendices
    ADD CONSTRAINT pk_aprendices PRIMARY KEY (identi_user);


--
-- TOC entry 3351 (class 2606 OID 16486)
-- Name: coordinadores pk_coordinadores; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.coordinadores
    ADD CONSTRAINT pk_coordinadores PRIMARY KEY (identi_user);


--
-- TOC entry 3355 (class 2606 OID 16488)
-- Name: instructores pk_instructores; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instructores
    ADD CONSTRAINT pk_instructores PRIMARY KEY (identi_user);


--
-- TOC entry 3357 (class 2606 OID 16490)
-- Name: instructores_fichas pk_instructores_fichas; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instructores_fichas
    ADD CONSTRAINT pk_instructores_fichas PRIMARY KEY (identi_user, id_ficha, id_competencia);


--
-- TOC entry 3361 (class 2606 OID 16492)
-- Name: roles rol_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT rol_pkey PRIMARY KEY (id_rol);


--
-- TOC entry 3363 (class 2606 OID 16494)
-- Name: sedes sedes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sedes
    ADD CONSTRAINT sedes_pkey PRIMARY KEY (id_sede);


--
-- TOC entry 3365 (class 2606 OID 16496)
-- Name: tipo_novedad tipo_novedad_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipo_novedad
    ADD CONSTRAINT tipo_novedad_pkey PRIMARY KEY (id_tipo_novedad);


--
-- TOC entry 3367 (class 2606 OID 16498)
-- Name: usuarios usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (identi_user);


--
-- TOC entry 3368 (class 2606 OID 16499)
-- Name: ambientes ambientes_id_sede_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ambientes
    ADD CONSTRAINT ambientes_id_sede_fkey FOREIGN KEY (id_sede) REFERENCES public.sedes(id_sede);


--
-- TOC entry 3369 (class 2606 OID 16504)
-- Name: aprendices fk_aprendices_fichas; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.aprendices
    ADD CONSTRAINT fk_aprendices_fichas FOREIGN KEY (id_ficha) REFERENCES public.fichas(id_ficha);


--
-- TOC entry 3370 (class 2606 OID 16509)
-- Name: aprendices fk_aprendices_usuarios; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.aprendices
    ADD CONSTRAINT fk_aprendices_usuarios FOREIGN KEY (identi_user) REFERENCES public.usuarios(identi_user);


--
-- TOC entry 3371 (class 2606 OID 16514)
-- Name: coordinadores fk_coordinadores_areas; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.coordinadores
    ADD CONSTRAINT fk_coordinadores_areas FOREIGN KEY (id_area) REFERENCES public.areas(id_area);


--
-- TOC entry 3372 (class 2606 OID 16519)
-- Name: coordinadores fk_coordinadores_usuarios; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.coordinadores
    ADD CONSTRAINT fk_coordinadores_usuarios FOREIGN KEY (identi_user) REFERENCES public.usuarios(identi_user);


--
-- TOC entry 3374 (class 2606 OID 16524)
-- Name: instructores_fichas fk_id_competencias; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instructores_fichas
    ADD CONSTRAINT fk_id_competencias FOREIGN KEY (id_competencia) REFERENCES public.competencias(id_competencia);


--
-- TOC entry 3375 (class 2606 OID 16529)
-- Name: instructores_fichas fk_id_fichas; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instructores_fichas
    ADD CONSTRAINT fk_id_fichas FOREIGN KEY (id_ficha) REFERENCES public.fichas(id_ficha);


--
-- TOC entry 3376 (class 2606 OID 16534)
-- Name: instructores_fichas fk_id_instructores; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instructores_fichas
    ADD CONSTRAINT fk_id_instructores FOREIGN KEY (identi_user) REFERENCES public.instructores(identi_user);


--
-- TOC entry 3373 (class 2606 OID 16539)
-- Name: instructores fk_instructores_usuarios; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instructores
    ADD CONSTRAINT fk_instructores_usuarios FOREIGN KEY (identi_user) REFERENCES public.usuarios(identi_user);


--
-- TOC entry 3377 (class 2606 OID 16544)
-- Name: novedades fk_novedades_tipo; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.novedades
    ADD CONSTRAINT fk_novedades_tipo FOREIGN KEY (id_tipo_novedad) REFERENCES public.tipo_novedad(id_tipo_novedad);


--
-- TOC entry 3378 (class 2606 OID 16549)
-- Name: novedades fk_novedades_usuarios; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.novedades
    ADD CONSTRAINT fk_novedades_usuarios FOREIGN KEY (usuarios) REFERENCES public.usuarios(identi_user);


--
-- TOC entry 3379 (class 2606 OID 16554)
-- Name: sedes sedes_id_ciudad_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sedes
    ADD CONSTRAINT sedes_id_ciudad_fkey FOREIGN KEY (id_ciudad) REFERENCES public.ciudades(id_ciudad);


--
-- TOC entry 3380 (class 2606 OID 16559)
-- Name: usuarios usuarios_id_rol_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_id_rol_fkey FOREIGN KEY (id_rol) REFERENCES public.roles(id_rol);


-- Completed on 2026-10-15 23:58:10

--
-- PostgreSQL database dump complete
--

\unrestrict GbGCbeAMdzIsLJMwWvTwBAVjQyun4FS0TWZMQMzoS5V2cuRNo74EqtbyebV4SjT

