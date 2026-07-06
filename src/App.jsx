import { ShieldCheck, Menu, X, Phone, Mail, MapPin, CheckCircle2, Star, Send, BriefcaseBusiness, Camera, Car, Users, Lock, Award, GraduationCap, Building2 } from 'lucide-react';
import React, { useMemo, useState } from 'react';
const phone='2348083790550';
const brand={name:'Speedmen Protection Limited',tagline:'Swift Response. Strong Protection. Total Peace of Mind.',email:'info@speedmenprotection.com',address:'Plaza 1, CGC Junction, Ushafa, Bwari, Abuja'};
export default function App(){return <div><h1>{brand.name}</h1><p>{brand.tagline}</p><p><Phone/> +234 808 379 0550</p><p><Mail/> {brand.email}</p><p><MapPin/> {brand.address}</p><a href={`https://wa.me/${phone}`}>WhatsApp</a></div>}